module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:8000/',
        'http://localhost:8000/index.html',
        'http://localhost:8000/test.html'
      ],
      startServerCommand: 'python -m http.server 8000',
      startServerReadyPattern: 'Serving HTTP',
      startServerReadyTimeout: 10000,
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.8}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['warn', {minScore: 0.8}],
        'categories:seo': ['warn', {minScore: 0.8}],
        'categories:pwa': 'off'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    },
    server: {
      port: 9001,
      storage: './lighthouse-reports'
    }
  }
};