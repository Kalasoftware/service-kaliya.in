'use client'

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    const subject = `Contact from ${name}`
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
    
    window.location.href = `mailto:sumeet@kaliya.in?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <>
      <header>
        <nav>
          <h1><a href="#top">kaliya.in</a></h1>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}></div>
          ))}
        </div>
        <h2>Get Your Website Ready ✨</h2>
        <p>Professional web development and mobile app solutions for your business</p>
        <a href="#contact" className="cta">Get Started →</a>
      </section>

      <section className="stats">
        <div className="stat-item shimmer">
          <div className="stat-number">50+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item shimmer">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat-item shimmer">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
        <div className="stat-item shimmer">
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card shimmer">
            <h3>🌐 Website Development</h3>
            <p>Custom websites tailored to your business needs with modern design and functionality</p>
          </div>
          <div className="service-card shimmer">
            <h3>📱 Mobile Apps</h3>
            <p>Native and cross-platform mobile applications for iOS and Android</p>
          </div>
          <div className="service-card shimmer">
            <h3>🛒 E-Commerce</h3>
            <p>Complete online store solutions with payment integration</p>
          </div>
        </div>
      </section>

      <section id="team">
        <h2>Our Process - From Localhost to Live</h2>
        <p style={{textAlign: 'center', color: '#d4af37', marginBottom: '3rem', fontSize: '1.1rem'}}>
          Expert team proficient in every step of your digital journey
        </p>
        <div className="roadmap">
          <div className="roadmap-item">
            <div className="roadmap-icon">💻</div>
            <h3>Development</h3>
          </div>
          <div className="roadmap-line">
            <div className="track-fill-top"></div>
            <div className="track-fill-bottom"></div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">🚀</div>
            <h3>VPS Setup</h3>
          </div>
          <div className="roadmap-line">
            <div className="track-fill-top"></div>
            <div className="track-fill-bottom"></div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">📊</div>
            <h3>Monitoring</h3>
          </div>
          <div className="roadmap-line">
            <div className="track-fill-top"></div>
            <div className="track-fill-bottom"></div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">📢</div>
            <h3>Running Ads</h3>
          </div>
          <div className="roadmap-line">
            <div className="track-fill-top"></div>
            <div className="track-fill-bottom"></div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-icon">✨</div>
            <h3>Get Set Go</h3>
          </div>
        </div>
        <div className="roadmap-details">
          <div className="detail-card">
            <h4>💻 Development</h4>
            <p>Building your project from scratch on localhost with cutting-edge technologies</p>
          </div>
          <div className="detail-card">
            <h4>🚀 VPS Setup</h4>
            <p>Configuring and deploying on secure VPS servers for optimal performance</p>
          </div>
          <div className="detail-card">
            <h4>📊 Monitoring</h4>
            <p>24/7 server monitoring, uptime tracking, and performance optimization</p>
          </div>
          <div className="detail-card">
            <h4>📢 Running Ads</h4>
            <p>Strategic digital marketing campaigns to drive traffic and conversions</p>
          </div>
          <div className="detail-card">
            <h4>✨ Get Set Go</h4>
            <p>Your project is live, optimized, and ready to scale with ongoing support</p>
          </div>
        </div>
      </section>

      <section id="pricing">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Basic Website</h3>
            <p className="price">₹25,000</p>
            <ul>
              <li>5 Pages</li>
              <li>Responsive Design</li>
              <li>Contact Form</li>
              <li>1 Month Support</li>
            </ul>
          </div>
          <div className="price-card featured">
            <h3>Business Website</h3>
            <p className="price">₹50,000</p>
            <ul>
              <li>10 Pages</li>
              <li>Custom Design</li>
              <li>SEO Optimization</li>
              <li>3 Months Support</li>
            </ul>
          </div>
          <div className="price-card">
            <h3>Mobile App</h3>
            <p className="price">₹1,50,000</p>
            <ul>
              <li>iOS & Android</li>
              <li>Custom Features</li>
              <li>API Integration</li>
              <li>6 Months Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Tell us about your project" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2026 kaliya.in. All rights reserved.</p>
      </footer>
    </>
  )
}
