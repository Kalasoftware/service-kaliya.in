{
  "apps": [{
    "name": "kaliya-website",
    "script": "npm",
    "args": "start",
    "cwd": "/home/ubuntu/service-kaliya.in",
    "instances": 1,
    "autorestart": true,
    "watch": false,
    "max_memory_restart": "1G",
    "env": {
      "NODE_ENV": "production",
      "PORT": 5000
    }
  }]
}
