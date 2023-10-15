/// <reference types="vite/client" />
/// <reference lib="webworker" />

import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkOnly } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope

const entries = self.__WB_MANIFEST

// self.__WB_MANIFEST is default injection point
precacheAndRoute(entries)

// clean old assets
cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

if (import.meta.env.PROD) {
  function escapeStringRegexp(value: string) {
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return value
      .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      .replace(/-/g, '\\x2d')
  }
  allowlist = entries.filter((page) => {
    return typeof page === 'string'
      ? page.endsWith('.html')
      : page.url.endsWith('.html')
  }).map((page) => {
    const url = typeof page === 'string' ? page : page.url
    const regex = url === 'index.html'
      ? escapeStringRegexp('/')
      : escapeStringRegexp(`/${url.replace(/\.html$/, '')}`)
    return new RegExp(`^${regex}(\\.html)?$`)
  })
  registerRoute(
    ({ request, sameOrigin }) => {
      return sameOrigin && request.mode === 'navigate'
    },
    new NetworkOnly({
      plugins: [{
        /* this callback will be called when the fetch call fails */
        handlerDidError: async () => Response.redirect('404', 302),
        /* this callback will prevent caching the response */
        cacheWillUpdate: async () => null,
      }],
    }),
    'GET',
  )
}

// to allow work offline
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('index.html'),
  { allowlist },
))

self.skipWaiting()
clientsClaim()
