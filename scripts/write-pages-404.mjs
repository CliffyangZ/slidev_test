import { writeFileSync } from 'node:fs'

writeFileSync('dist/404.html', `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    const base = '/slidev_test/'
    const path = window.location.pathname
    const route = path.startsWith(base) ? path.slice(base.length) : ''

    if (route) {
      window.location.replace(base + '#/' + route + window.location.search + window.location.hash)
    } else {
      window.location.replace(base)
    }
  </script>
</head>
<body>
  Redirecting...
</body>
</html>
`)
