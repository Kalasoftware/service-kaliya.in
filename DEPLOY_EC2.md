# Deploy kaliya.in to EC2 with PM2

## Prerequisites
- EC2 instance (Ubuntu 22.04 recommended)
- Domain kaliya.in pointing to EC2 IP
- SSH access to EC2

---

## Step 1: Connect to EC2
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

---

## Step 2: Install Node.js (v18+)
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node -v  # Should show v18.x
npm -v
```

---

## Step 3: Install PM2
```bash
sudo npm install -g pm2
pm2 --version
```

---

## Step 4: Clone Repository
```bash
cd /home/ubuntu
git clone git@github.com:Kalasoftware/service-kaliya.in.git
cd service-kaliya.in
```

---

## Step 5: Install Dependencies
```bash
npm install
```

---

## Step 6: Build Next.js App
```bash
npm run build
```

---

## Step 7: Start with PM2
```bash
# Start the app
pm2 start npm --name "kaliya-website" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on system reboot
pm2 startup
# Copy and run the command it shows
```

---

## Step 8: Check Status
```bash
pm2 status
pm2 logs kaliya-website
```

---

## Step 9: Install Nginx (Reverse Proxy)
```bash
sudo apt install -y nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/kaliya.in
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name kaliya.in www.kaliya.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/kaliya.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Step 10: Install SSL (HTTPS)
```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d kaliya.in -d www.kaliya.in

# Auto-renewal is set up automatically
```

---

## Step 11: Configure Firewall
```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

---

## Useful PM2 Commands

```bash
# View logs
pm2 logs kaliya-website

# Restart app
pm2 restart kaliya-website

# Stop app
pm2 stop kaliya-website

# Delete app
pm2 delete kaliya-website

# Monitor
pm2 monit

# List all processes
pm2 list
```

---

## Update Deployment (Future Updates)

```bash
cd /home/ubuntu/service-kaliya.in
git pull origin main
npm install
npm run build
pm2 restart kaliya-website
```

---

## EC2 Security Group Settings

In AWS Console, ensure your EC2 security group allows:
- Port 22 (SSH) - Your IP only
- Port 80 (HTTP) - 0.0.0.0/0
- Port 443 (HTTPS) - 0.0.0.0/0

---

## Troubleshooting

**App not starting:**
```bash
pm2 logs kaliya-website --lines 100
```

**Port 3000 already in use:**
```bash
sudo lsof -i :3000
pm2 delete all
pm2 start npm --name "kaliya-website" -- start
```

**Nginx errors:**
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

---

## Your Site is Live! 🎉

Visit: https://kaliya.in

The website will:
- Auto-restart on crashes (PM2)
- Start automatically on server reboot
- Serve over HTTPS with SSL
- Handle traffic via Nginx reverse proxy
