/**
 * Smarttopia Edutech - Main JavaScript Application
 * Vanilla JavaScript implementation for interactive features, animations, dynamic content, and form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Data Configurations (Editable Data Objects)
  // --------------------------------------------------------------------------

  // Statistics Data
  const statsData = [
    { id: 'stat-students', target: 1000, suffix: '+', label: 'Students Empowered' },
    { id: 'stat-programs', target: 50, suffix: '+', label: 'Specialized Programs' },
    { id: 'stat-projects', target: 100, suffix: '+', label: 'Real-World Projects' },
    { id: 'stat-partners', target: 25, suffix: '+', label: 'Industry Partners' }
  ];

  // Testimonials Data
  const testimonialsData = [
    {
      name: 'Aarav Sharma',
      course: 'Full Stack Development',
      role: 'Software Engineer @ TechCorp',
      review: 'Smarttopia Edutech changed my career path. The hands-on capstone projects and live mentorship helped me crack top tech interviews with confidence.',
      rating: 5,
      avatar: 'assets/images/avatar1.png'
    },
    {
      name: 'Priya Patel',
      course: 'Data Science & Analytics',
      role: 'Data Analyst @ Analytics Hub',
      review: 'The practical curriculum and real dataset exposure gave me an edge. The career support team helped build my LinkedIn and resume seamlessly.',
      rating: 5,
      avatar: 'assets/images/avatar1.png'
    },
    {
      name: 'Rahul Verma',
      course: 'Python & Django Development',
      role: 'Backend Engineer @ InnovateX',
      review: 'Outstanding internship experience! Working on enterprise-level applications with industry mentors prepared me for day-1 corporate readiness.',
      rating: 5,
      avatar: 'assets/images/avatar1.png'
    },
    {
      name: 'Sneha Kulkarni',
      course: 'AI & Machine Learning',
      role: 'ML Trainee @ DeepMind Solutions',
      review: 'The step-by-step learning approach and project reviews by senior engineers were top-notch. Highly recommend Smarttopia Edutech!',
      rating: 5,
      avatar: 'assets/images/avatar1.png'
    }
  ];

  // Programs Data
  const programsData = [
    {
      id: 'prog-python',
      title: 'Python & Django Development',
      category: 'web',
      icon: '🐍',
      desc: 'Master core Python, object-oriented design, Django web framework, REST APIs, and database integration.',
      skills: ['Python 3', 'Django', 'REST APIs', 'PostgreSQL', 'Git'],
      details: 'This course equips you with complete backend engineering capabilities using Python and Django. Build robust RESTful APIs, manage authentication, database ORM, and deploy scalable applications to production.'
    },
    {
      id: 'prog-fullstack',
      title: 'Full Stack Development',
      category: 'web',
      icon: '💻',
      desc: 'Become a complete web developer building modern responsive frontends and enterprise Node/React backends.',
      skills: ['HTML5/CSS3', 'JavaScript ES6+', 'React', 'Node.js', 'MongoDB'],
      details: 'Comprehensive end-to-end full stack program covering frontend styling, modern component architecture, backend microservices, database modeling, and automated testing.'
    },
    {
      id: 'prog-java',
      title: 'Java Enterprise Development',
      category: 'web',
      icon: '☕',
      desc: 'Learn core Java, Spring Boot microservices, Hibernate ORM, and enterprise software architecture.',
      skills: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Microservices', 'Docker'],
      details: 'Designed for enterprise tech roles. Master OOP principles, multithreading, Spring Framework architecture, security, and cloud deployment pipelines.'
    },
    {
      id: 'prog-ds',
      title: 'Data Science & Analytics',
      category: 'data',
      icon: '📊',
      desc: 'Extract actionable business insights using Python, SQL, exploratory data analysis, and predictive modeling.',
      skills: ['Pandas & NumPy', 'SQL', 'Tableau', 'Scikit-Learn', 'Statistics'],
      details: 'Hands-on program covering data cleaning, statistical analysis, dashboard creation, machine learning algorithms, and real-world business case studies.'
    },
    {
      id: 'prog-ai',
      title: 'AI & Machine Learning',
      category: 'data',
      icon: '🤖',
      desc: 'Build intelligent neural networks, computer vision models, and natural language processing pipelines.',
      skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision'],
      details: 'Explore cutting-edge artificial intelligence. Train neural networks, implement LLM integrations, optimize model accuracy, and deploy AI models via APIs.'
    },
    {
      id: 'prog-cloud',
      title: 'AWS & Cloud Computing',
      category: 'cloud',
      icon: '☁️',
      desc: 'Architect scalable cloud infrastructure, serverless functions, DevOps pipelines, and security controls.',
      skills: ['AWS EC2/S3', 'Lambda', 'Docker & K8s', 'Terraform', 'CI/CD'],
      details: 'Gain practical experience in cloud engineering. Learn infrastructure as code, cloud monitoring, container orchestration, and AWS Solutions Architect curriculum.'
    },
    {
      id: 'prog-cyber',
      title: 'Cyber Security & Ethical Hacking',
      category: 'cloud',
      icon: '🛡️',
      desc: 'Protect network infrastructure, perform penetration testing, analyze vulnerabilities, and secure applications.',
      skills: ['Network Security', 'Penetration Testing', 'Wireshark', 'Metasploit', 'SOC Operations'],
      details: 'Learn practical defense and offensive security techniques. Gain hands-on lab experience in vulnerability assessment, threat intelligence, and compliance.'
    },
    {
      id: 'prog-vlsi',
      title: 'VLSI & Chip Design',
      category: 'core',
      icon: '⚡',
      desc: 'Design advanced digital circuits, RTL modeling with Verilog, physical design flow, and FPGA prototyping.',
      skills: ['Verilog HDL', 'RTL Design', 'SystemVerilog', 'Static Timing Analysis', 'EDA Tools'],
      details: 'Specialized hardware engineering program covering digital electronics fundamentals, chip synthesis, verification techniques, and ASIC design flow.'
    },
    {
      id: 'prog-embedded',
      title: 'Embedded Systems & IoT',
      category: 'core',
      icon: '🔌',
      desc: 'Develop firmware for microcontrollers, RTOS applications, sensors integration, and IoT edge devices.',
      skills: ['Embedded C', 'ARM Cortex', 'RTOS', 'SPI/I2C/UART', 'IoT Protocols'],
      details: 'Learn low-level hardware programming, real-time operating system concepts, hardware interfacing, and connected smart device hardware prototyping.'
    },
    {
      id: 'prog-marketing',
      title: 'Digital Marketing & Growth',
      category: 'core',
      icon: '📈',
      desc: 'Master search engine optimization, performance marketing, social media strategies, and growth analytics.',
      skills: ['SEO/SEM', 'Google Ads', 'Meta Marketing', 'Google Analytics 4', 'Content Strategy'],
      details: 'Drive high ROI digital campaigns. Learn customer acquisition strategies, Conversion Rate Optimization (CRO), automated email flows, and analytics dashboards.'
    }
  ];

  // Projects Data
  const projectsData = [
    {
      title: 'Enterprise EduManage SaaS',
      category: 'web',
      desc: 'A full-stack cloud platform for educational institution operations, student grading, and fee management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      title: 'AI Smart Resume Ranker',
      category: 'ai',
      desc: 'Natural language processing model that analyzes candidate resumes against job descriptions and scores relevance.',
      tech: ['Python', 'NLP', 'TF-IDF', 'FastAPI']
    },
    {
      title: 'Real-time Healthcare Analytics Dashboard',
      category: 'data',
      desc: 'Interactive data visualization dashboard tracking patient outcomes and hospital resource distribution.',
      tech: ['Python', 'Pandas', 'PowerBI', 'SQL']
    },
    {
      title: 'AWS Cloud Serverless E-Commerce',
      category: 'cloud',
      desc: 'High-availability serverless e-commerce backend built with AWS Lambda, DynamoDB, and API Gateway.',
      tech: ['AWS Lambda', 'DynamoDB', 'Node.js', 'Terraform']
    },
    {
      title: 'Smart Agriculture IoT Monitor',
      category: 'iot',
      desc: 'Low-power microcontroller node collecting soil moisture and climate telemetry sent to cloud dashboard.',
      tech: ['Embedded C', 'ESP32', 'MQTT', 'Node-RED']
    },
    {
      title: 'Dual-Core RISC-V RTL Accelerator',
      category: 'vlsi',
      desc: 'Custom Verilog RTL design for hardware math acceleration tested on Xilinx FPGA board.',
      tech: ['Verilog HDL', 'SystemVerilog', 'FPGA', 'EDA Tools']
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Navigation & Mobile Menu Handler
  // --------------------------------------------------------------------------
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Toggle Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Mobile Menu Toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu on nav link click & active link highlight
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // Highlight Active Nav Item on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Statistics Animated Counter (IntersectionObserver)
  // --------------------------------------------------------------------------
  let countersTriggered = false;

  const animateCounters = () => {
    statsData.forEach(item => {
      const element = document.getElementById(item.id);
      if (!element) return;

      let start = 0;
      const end = item.target;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          element.textContent = end + item.suffix;
          clearInterval(timer);
        } else {
          element.textContent = start + item.suffix;
        }
      }, stepTime);
    });
  };

  const statsSection = document.getElementById('statistics');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersTriggered) {
          animateCounters();
          countersTriggered = true;
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  // --------------------------------------------------------------------------
  // 4. Render & Filter Programs / Courses
  // --------------------------------------------------------------------------
  const programsGrid = document.getElementById('programsGrid');

  const renderPrograms = (category = 'all') => {
    if (!programsGrid) return;
    programsGrid.innerHTML = '';

    const filtered = category === 'all'
      ? programsData
      : programsData.filter(p => p.category === category);

    filtered.forEach(prog => {
      const card = document.createElement('div');
      card.className = 'program-card reveal revealed';
      card.innerHTML = `
        <div class="program-header">
          <div class="program-icon">${prog.icon}</div>
          <span class="badge">Industry Ready</span>
        </div>
        <h3>${prog.title}</h3>
        <p class="program-desc">${prog.desc}</p>
        <div class="skills-tags">
          ${prog.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="program-footer">
          <button class="btn btn-outline btn-sm learn-more-btn" data-id="${prog.id}">Learn More</button>
          <a href="#contact" class="btn btn-primary btn-sm enquire-btn-link" data-course="${prog.title}">Enquire</a>
        </div>
      `;
      programsGrid.appendChild(card);
    });

    // Attach Modal triggers to new buttons
    document.querySelectorAll('.learn-more-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const progId = e.target.getAttribute('data-id');
        openProgramModal(progId);
      });
    });

    document.querySelectorAll('.enquire-btn-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const courseName = e.target.getAttribute('data-course');
        const courseSelect = document.getElementById('courseInterested');
        if (courseSelect) {
          for (let option of courseSelect.options) {
            if (option.value.includes(courseName) || option.text.includes(courseName)) {
              option.selected = true;
              break;
            }
          }
        }
      });
    });
  };

  renderPrograms();

  // Program Tab Click Handlers
  const programTabs = document.querySelectorAll('.program-tabs .tab-btn');
  programTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      programTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderPrograms(category);
    });
  });

  // --------------------------------------------------------------------------
  // 5. Render & Filter Projects
  // --------------------------------------------------------------------------
  const projectsGrid = document.getElementById('projectsGrid');

  const renderProjects = (category = 'all') => {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = category === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === category);

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card reveal revealed';
      card.innerHTML = `
        <div class="project-card-body">
          <span class="badge" style="margin-bottom:0.75rem;">Capstone Project</span>
          <h3>${proj.title}</h3>
          <p>${proj.desc}</p>
          <div class="tech-stack">
            ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          <a href="#contact" class="btn btn-secondary btn-sm" style="width:100%;">Enquire About Project</a>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  };

  renderProjects();

  const projectTabs = document.querySelectorAll('.project-filters .tab-btn');
  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  // --------------------------------------------------------------------------
  // 6. Testimonial Slider Handler
  // --------------------------------------------------------------------------
  const testimonialContainer = document.getElementById('testimonialContainer');
  const sliderDots = document.getElementById('sliderDots');
  let currentSlide = 0;
  let sliderInterval;

  const renderTestimonials = () => {
    if (!testimonialContainer || !sliderDots) return;
    testimonialContainer.innerHTML = '';
    sliderDots.innerHTML = '';

    testimonialsData.forEach((item, idx) => {
      // Create Card
      const card = document.createElement('div');
      card.className = `testimonial-card ${idx === 0 ? 'active' : ''}`;
      card.innerHTML = `
        <div class="stars">★★★★★</div>
        <p class="testimonial-quote">"${item.review}"</p>
        <div class="testimonial-author">
          <img src="${item.avatar}" alt="${item.name}" class="author-img">
          <div class="author-info">
            <h4>${item.name}</h4>
            <p>${item.course} | ${item.role}</p>
          </div>
        </div>
      `;
      testimonialContainer.appendChild(card);

      // Create Dot
      const dot = document.createElement('span');
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToSlide(idx));
      sliderDots.appendChild(dot);
    });
  };

  const goToSlide = (index) => {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (!cards.length) return;

    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentSlide = (index + cards.length) % cards.length;
    cards[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    prevSlide();
    resetSliderTimer();
  });
  document.getElementById('nextBtn')?.addEventListener('click', () => {
    nextSlide();
    resetSliderTimer();
  });

  const startSliderTimer = () => {
    sliderInterval = setInterval(nextSlide, 5000);
  };

  const resetSliderTimer = () => {
    clearInterval(sliderInterval);
    startSliderTimer();
  };

  renderTestimonials();
  startSliderTimer();

  // --------------------------------------------------------------------------
  // 7. FAQ Accordion Handler
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. Program Details Modal Handler
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('programModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const openProgramModal = (progId) => {
    const prog = programsData.find(p => p.id === progId);
    if (!prog || !modalOverlay) return;

    modalTitle.textContent = prog.title;
    modalBody.innerHTML = `
      <p style="font-size:1.05rem; margin-bottom:1.25rem; color:var(--slate-700);">${prog.details}</p>
      <h4 style="margin-bottom:0.75rem; color:var(--primary-700);">Key Skills & Tools Covered</h4>
      <div class="skills-tags" style="margin-bottom:1.5rem;">
        ${prog.skills.map(s => `<span class="skill-tag" style="font-size:0.85rem; padding:0.3rem 0.8rem;">${s}</span>`).join('')}
      </div>
      <div style="background-color:var(--primary-50); padding:1.25rem; border-radius:var(--radius-md); margin-bottom:1.5rem;">
        <h5 style="color:var(--primary-800); margin-bottom:0.4rem;">Included with this course:</h5>
        <ul style="list-style:disc; padding-left:1.2rem; font-size:0.9rem; color:var(--slate-700);">
          <li>Live Interactive Mentorship & Code Reviews</li>
          <li>Capstones & Industry Placement Projects</li>
          <li>Certificate of Excellence & Resume Optimization</li>
        </ul>
      </div>
      <a href="#contact" class="btn btn-primary" style="width:100%; text-align:center;" onclick="closeModalAndEnquire('${prog.title}')">Enquire Now for Next Batch</a>
    `;

    modalOverlay.classList.add('active');
  };

  const closeModal = () => {
    if (modalOverlay) modalOverlay.classList.remove('active');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.closeModalAndEnquire = (courseName) => {
    closeModal();
    const courseSelect = document.getElementById('courseInterested');
    if (courseSelect) {
      for (let option of courseSelect.options) {
        if (option.value.includes(courseName) || option.text.includes(courseName)) {
          option.selected = true;
          break;
        }
      }
    }
  };

  // --------------------------------------------------------------------------
  // 9. Contact / Enquiry Form Validation & Submission
  // --------------------------------------------------------------------------
  const enquiryForm = document.getElementById('enquiryForm');
  const formAlert = document.getElementById('formAlert');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const courseInterested = document.getElementById('courseInterested');

      // Simple validation rules
      if (!fullName.value.trim()) {
        showFieldError(fullName, 'Please enter your full name');
        isValid = false;
      } else {
        clearFieldError(fullName);
      }

      if (!email.value.trim() || !validateEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(email);
      }

      if (!phone.value.trim() || phone.value.trim().length < 10) {
        showFieldError(phone, 'Please enter a valid 10-digit phone number');
        isValid = false;
      } else {
        clearFieldError(phone);
      }

      if (!courseInterested.value) {
        showFieldError(courseInterested, 'Please select a program of interest');
        isValid = false;
      } else {
        clearFieldError(courseInterested);
      }

      if (isValid) {
        // Show Success Toast Feedback
        if (formAlert) {
          formAlert.className = 'form-alert success';
          formAlert.textContent = 'Thank you! Your enquiry has been submitted successfully. Our career advisor will contact you shortly.';
          formAlert.style.display = 'block';
        }

        enquiryForm.reset();
        setTimeout(() => {
          if (formAlert) formAlert.style.display = 'none';
        }, 6000);
      }
    });
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const showFieldError = (field, message) => {
    field.classList.add('error');
    const errorSpan = field.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-text')) {
      errorSpan.textContent = message;
      errorSpan.style.display = 'block';
    }
  };

  const clearFieldError = (field) => {
    field.classList.remove('error');
    const errorSpan = field.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-text')) {
      errorSpan.style.display = 'none';
    }
  };

  // --------------------------------------------------------------------------
  // 10. Scroll Reveal Animation & Back To Top Handler
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  const checkReveal = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', checkReveal);
  checkReveal();

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Auto Update Current Year in Footer
  const currentYearElem = document.getElementById('currentYear');
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 11. Smarttopia AI Chatbot & ChatGPT Multi-Platform Engine
  // --------------------------------------------------------------------------
  const chatbotTrigger = document.getElementById('chatbotTrigger');
  const chatbotCard = document.getElementById('chatbotCard');
  const chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
  const chatbotResetBtn = document.getElementById('chatbotResetBtn');
  const chatbotSettingsBtn = document.getElementById('chatbotSettingsBtn');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotBody = document.getElementById('chatbotBody');
  const chatbotTyping = document.getElementById('chatbotTyping');
  const chatbotBadge = document.getElementById('chatbotBadge');
  const chatPrompts = document.getElementById('chatPrompts');
  const chatGptModal = document.getElementById('chatGptModal');
  const chatGptModalClose = document.getElementById('chatGptModalClose');
  const openAiApiKeyInput = document.getElementById('openAiApiKeyInput');
  const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
  const clearApiKeyBtn = document.getElementById('clearApiKeyBtn');
  const apiStatusText = document.getElementById('apiStatusText');

  // Company Knowledge Base
  const companyKnowledge = [
    {
      keywords: ['program', 'course', 'training', 'learn', 'study', 'offer', 'curriculum', 'syllabus'],
      response: `<strong>Smarttopia Edutech offers specialized, industry-focused programs:</strong><br>
      <ul>
        <li><strong>Python & Django Development:</strong> Core Python, OOP, Django framework, REST APIs, PostgreSQL.</li>
        <li><strong>Full Stack Web Development:</strong> HTML5, CSS3, JavaScript, React.js, Node.js, Express & MongoDB (MERN).</li>
        <li><strong>Data Science & Analytics:</strong> Python, Pandas, NumPy, PowerBI, SQL, Machine Learning algorithms.</li>
        <li><strong>AI & Machine Learning:</strong> Neural Networks, Deep Learning, TensorFlow, PyTorch, Computer Vision.</li>
        <li><strong>VLSI Design & Verification:</strong> Verilog, SystemVerilog, RTL design, ASIC design flow.</li>
        <li><strong>Embedded Systems & IoT:</strong> C/C++, Microcontrollers (ARM/ESP32), RTOS, Sensors & IoT Protocols.</li>
        <li><strong>Cyber Security:</strong> Network Security, Ethical Hacking, Web Security, Penetration Testing.</li>
        <li><strong>Cloud Computing:</strong> AWS & Azure Cloud Architecture, DevOps basics, Docker & Kubernetes.</li>
      </ul>
      <em>All programs include hands-on capstone projects and live mentor support!</em>`
    },
    {
      keywords: ['intern', 'internship', 'stipend', 'project', 'capstone', 'practical', 'experience', 'hands-on'],
      response: `<strong>Smarttopia Internship Program Highlights:</strong><br>
      <ul>
        <li><strong>Real-World Capstones:</strong> Work on enterprise-level projects designed with industry partners.</li>
        <li><strong>Live Mentorship:</strong> Direct code reviews and guidance from senior engineers.</li>
        <li><strong>Verified Certificates:</strong> Experience & completion certificates to boost your resume.</li>
        <li><strong>Flexible Modes:</strong> Available in online remote and offline classroom formats.</li>
        <li><strong>Interview Readiness:</strong> Project presentation preparation for top tech recruiters.</li>
      </ul>
      Click <strong>WhatsApp</strong> above to talk with an internship counselor!`
    },
    {
      keywords: ['placement', 'job', 'hire', 'hiring', 'interview', 'career', 'salary', 'package', 'company', 'partner', 'guarantee'],
      response: `<strong>100% Placement & Career Support at Smarttopia Edutech:</strong><br>
      <ul>
        <li><strong>Student Outcomes:</strong> 1000+ students empowered, 25+ hiring partner companies.</li>
        <li><strong>1-on-1 Mock Interviews:</strong> Technical & HR interview preparation with industry experts.</li>
        <li><strong>Resume & Portfolio Polishing:</strong> ATS-optimized resume building and GitHub/LinkedIn branding.</li>
        <li><strong>Exclusive Job Drives:</strong> Direct hiring drives and referral pipelines with partner startups and IT firms.</li>
      </ul>`
    },
    {
      keywords: ['contact', 'address', 'location', 'phone', 'email', 'office', 'where', 'map', 'bengaluru', 'bangalore', 'number'],
      response: `<strong>Smarttopia Edutech Contact & Location Details:</strong><br>
      📍 <strong>Address:</strong> 5th Floor, 1318, JP Nagar Phase 2, Bengaluru, Karnataka, 560078<br>
      📞 <strong>Phone:</strong> <a href="tel:+917780271969" style="color:var(--primary-600); text-decoration:underline;">+91 77802 71969</a><br>
      ✉️ <strong>Email:</strong> <a href="mailto:hr@smarttopiaedutech.com" style="color:var(--primary-600); text-decoration:underline;">hr@smarttopiaedutech.com</a><br>
      🌐 <strong>Website:</strong> www.smarttopiaedutech.com<br>
      ⏱️ <strong>Operating Hours:</strong> Monday – Saturday: 9:00 AM – 7:00 PM IST`
    },
    {
      keywords: ['fee', 'fees', 'cost', 'price', 'pricing', 'discount', 'scholarship', 'installment', 'pay', 'payment'],
      response: `<strong>Smarttopia Program Fee & Payment Flexibility:</strong><br>
      <ul>
        <li>All our courses are priced affordably to ensure quality education is accessible to everyone.</li>
        <li>Flexible no-cost installment payment options available for students.</li>
        <li>Early-bird discounts and merit scholarships offered for top performers.</li>
      </ul>
      Call us at <strong>+91 77802 71969</strong> or click <strong>WhatsApp</strong> for exact program fee details!`
    },
    {
      keywords: ['founder', 'ceo', 'owner', 'bhaskar', 'basireddy', 'started', 'who built', 'leadership', 'director', 'management'],
      response: `<strong>Smarttopia Edutech Leadership & Founder:</strong><br><br>
      👤 <strong>Founder & CEO:</strong> Bhaskar Basireddy<br>
      🎯 <strong>Mission & Vision:</strong> Empowering students and aspiring tech professionals with industry-ready practical engineering skills, live capstone projects, and 100% placement guidance.<br><br>
      Under Bhaskar Basireddy's leadership, Smarttopia Edutech has empowered <strong>1000+ students</strong> across 50+ specialized programs in partnership with <strong>25+ industry hiring partners</strong>.`
    },
    {
      keywords: ['who', 'about', 'smarttopia', 'company', 'vision', 'mission', 'why'],
      response: `<strong>About Smarttopia Edutech:</strong><br>
      Smarttopia Edutech is a premier tech skill-building ecosystem founded by <strong>Bhaskar Basireddy (Founder & CEO)</strong>.<br><br>
      We are dedicated to bridging the gap between university education and real-world tech industry expectations by empowering students with software engineering, AI, VLSI, and data skills through live capstone projects and guaranteed placement assistance.`
    },
    {
      keywords: ['python', 'django'],
      response: `<strong>Python & Django Specialization:</strong><br>
      Covers Python Fundamentals, Advanced Data Structures, Object-Oriented Programming, Django Web Framework, REST APIs, Database Integration (PostgreSQL/SQLite), and Full Stack Deployment on Cloud servers.`
    },
    {
      keywords: ['data science', 'ai', 'machine learning', 'ml'],
      response: `<strong>Data Science & AI/ML Track:</strong><br>
      Comprehensive training covering Data Cleaning, EDA, Predictive Modeling, Deep Learning, Natural Language Processing (NLP), and deployment of AI models into production applications.`
    },
    {
      keywords: ['vlsi', 'embedded', 'iot'],
      response: `<strong>Core Engineering (VLSI & Embedded Systems):</strong><br>
      Focuses on Hardware Description Languages (Verilog), FPGA/ASIC design principles, Microcontrollers (ARM Cortex/ESP32), RTOS, and real-time IoT hardware interfacing.`
    }
  ];

  // Helper: Get OpenAI API Key
  const getOpenAiKey = () => localStorage.getItem('smarttopia_openai_key') || '';

  // Update UI Status
  const updateAiEngineStatus = () => {
    const key = getOpenAiKey();
    if (apiStatusText) {
      if (key) {
        apiStatusText.textContent = 'ChatGPT Online';
        if (apiStatusText.parentElement) {
          apiStatusText.parentElement.style.background = 'rgba(37, 99, 235, 0.2)';
          apiStatusText.parentElement.style.color = '#60a5fa';
          apiStatusText.parentElement.style.borderColor = 'rgba(96, 165, 250, 0.3)';
        }
      } else {
        apiStatusText.textContent = 'Smart Engine';
        if (apiStatusText.parentElement) {
          apiStatusText.parentElement.style.background = 'rgba(16, 185, 129, 0.2)';
          apiStatusText.parentElement.style.color = '#34d399';
          apiStatusText.parentElement.style.borderColor = 'rgba(52, 211, 153, 0.3)';
        }
      }
    }
  };

  updateAiEngineStatus();

  // Toggle Chatbot Card
  if (chatbotTrigger && chatbotCard) {
    chatbotTrigger.addEventListener('click', () => {
      const isActive = chatbotCard.classList.contains('active');
      if (isActive) {
        chatbotCard.classList.remove('active');
        chatbotCard.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('chatbot-open');
      } else {
        chatbotCard.classList.add('active');
        chatbotCard.setAttribute('aria-hidden', 'false');
        document.body.classList.add('chatbot-open');
        if (chatbotBadge) chatbotBadge.style.opacity = '0';
        if (chatbotInput) chatbotInput.focus();
      }
    });
  }

  if (chatbotCloseBtn && chatbotCard) {
    chatbotCloseBtn.addEventListener('click', () => {
      chatbotCard.classList.remove('active');
      chatbotCard.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('chatbot-open');
    });
  }

  // Open Settings Modal
  if (chatbotSettingsBtn && chatGptModal) {
    chatbotSettingsBtn.addEventListener('click', () => {
      if (openAiApiKeyInput) openAiApiKeyInput.value = getOpenAiKey();
      chatGptModal.classList.add('active');
    });
  }

  if (chatGptModalClose && chatGptModal) {
    chatGptModalClose.addEventListener('click', () => {
      chatGptModal.classList.remove('active');
    });
  }

  if (saveApiKeyBtn && openAiApiKeyInput && chatGptModal) {
    saveApiKeyBtn.addEventListener('click', () => {
      const keyVal = openAiApiKeyInput.value.trim();
      if (keyVal) {
        localStorage.setItem('smarttopia_openai_key', keyVal);
        alert('OpenAI ChatGPT API Key saved successfully!');
      } else {
        localStorage.removeItem('smarttopia_openai_key');
        alert('API Key cleared. Reverted to Smarttopia Built-in Engine.');
      }
      chatGptModal.classList.remove('active');
      updateAiEngineStatus();
    });
  }

  if (clearApiKeyBtn && openAiApiKeyInput) {
    clearApiKeyBtn.addEventListener('click', () => {
      localStorage.removeItem('smarttopia_openai_key');
      openAiApiKeyInput.value = '';
      alert('API key removed. Chatbot will use Built-in Smart Engine.');
      updateAiEngineStatus();
    });
  }

  // Scroll Chat to Bottom
  const scrollChatToBottom = () => {
    if (chatbotBody) {
      chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
  };

  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // Append Message Element
  const appendMessage = (sender, contentHtml) => {
    if (!chatbotBody) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender === 'user' ? 'user-message' : 'ai-message'}`;

    if (sender === 'ai') {
      msgDiv.innerHTML = `
        <div class="message-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="4" y="8" width="16" height="12" rx="4"/>
            <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="13" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div class="message-content">
          ${contentHtml}
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="message-content">
          <p>${escapeHtml(contentHtml)}</p>
        </div>
      `;
    }

    chatbotBody.appendChild(msgDiv);
    scrollChatToBottom();
  };

  // Process User Input via OpenAI ChatGPT API
  const queryOpenAiApi = async (userPrompt, apiKey) => {
    const systemPrompt = `You are Smarttopia AI, the official intelligent virtual assistant for Smarttopia Edutech.
Smarttopia Edutech was founded by Bhaskar Basireddy (Founder & CEO) and is located at: 5th Floor, 1318, JP Nagar Phase 2, Bengaluru, Karnataka, 560078. Phone: +91 77802 71969, Email: hr@smarttopiaedutech.com.
We offer programs in: Python & Django Development, Full Stack Web Dev (MERN), Data Science & Analytics, Artificial Intelligence & Machine Learning, VLSI Design, Embedded Systems & IoT, Cyber Security, and Cloud Computing.
We offer 100% placement assistance, hands-on internships, capstone projects, 1-on-1 mentorship, resume reviews, and mock interviews.
Answer user questions concisely, professionally, and accurately formatted in clean HTML tags (<p>, <ul>, <li>, <strong>).`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 450
      })
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      throw new Error(errJson.error?.message || `OpenAI API returned status ${response.status}`);
    }

    const data = await response.json();
    let reply = data.choices[0]?.message?.content || 'Thank you for contacting Smarttopia Edutech! How else can I assist you?';
    reply = reply.replace(/^```html\n?/i, '').replace(/\n?```$/i, '');
    return reply;
  };

  // Generate Fallback Response from Built-in Knowledge
  const matchBuiltInKnowledge = (queryText) => {
    const lower = queryText.toLowerCase();
    
    for (const item of companyKnowledge) {
      if (item.keywords.some(kw => lower.includes(kw))) {
        return item.response;
      }
    }

    // Default Fallback
    return `Thank you for asking about <strong>Smarttopia Edutech</strong>! 👋<br><br>
    We offer specialized tech programs in Full Stack, Data Science, AI/ML, Python, VLSI, and Embedded Systems with guaranteed placement support.<br><br>
    Would you like to know more about:
    <ul>
      <li>📚 <strong>Our Programs & Courses</strong></li>
      <li>💼 <strong>Internship Opportunities</strong></li>
      <li>🎯 <strong>Placement Assistance</strong></li>
      <li>📍 <strong>Contact & Location</strong></li>
    </ul>
    You can also click the <strong>WhatsApp</strong> button above to chat directly with our career counselor!`;
  };

  // Handle Form Submission
  const handleChatSubmit = async (queryText) => {
    if (!queryText.trim()) return;

    // Render User Message
    appendMessage('user', queryText);
    if (chatbotInput) chatbotInput.value = '';

    // Show Typing Indicator
    if (chatbotTyping) chatbotTyping.style.display = 'flex';
    scrollChatToBottom();

    const apiKey = getOpenAiKey();

    try {
      let botResponseHtml = '';

      if (apiKey) {
        try {
          botResponseHtml = await queryOpenAiApi(queryText, apiKey);
        } catch (apiErr) {
          console.warn('OpenAI API Error, falling back to built-in knowledge engine:', apiErr);
          botResponseHtml = `<em>(OpenAI Key Notice: ${apiErr.message}. Showing Built-in Smarttopia Knowledge)</em><br><br>` + matchBuiltInKnowledge(queryText);
        }
      } else {
        // Simulate small natural typing delay for built-in engine
        await new Promise(r => setTimeout(r, 650));
        botResponseHtml = matchBuiltInKnowledge(queryText);
      }

      if (chatbotTyping) chatbotTyping.style.display = 'none';
      appendMessage('ai', botResponseHtml);

    } catch (err) {
      if (chatbotTyping) chatbotTyping.style.display = 'none';
      appendMessage('ai', 'Sorry, I encountered an issue processing your request. Please call us at <strong>+91 77802 71969</strong> or click WhatsApp above!');
    }
  };

  if (chatbotForm && chatbotInput) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleChatSubmit(chatbotInput.value);
    });
  }

  // Handle Quick Prompt Chips Click
  if (chatPrompts) {
    chatPrompts.addEventListener('click', (e) => {
      const chip = e.target.closest('.prompt-chip');
      if (chip) {
        const promptText = chip.getAttribute('data-prompt') || chip.innerText.trim();
        handleChatSubmit(promptText);
      }
    });
  }

  // Reset Conversation
  if (chatbotResetBtn) {
    chatbotResetBtn.addEventListener('click', () => {
      if (!chatbotBody) return;
      chatbotBody.innerHTML = `
        <div class="chat-message ai-message">
          <div class="message-avatar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="8" width="16" height="12" rx="4"/>
              <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
              <circle cx="15" cy="13" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          <div class="message-content">
            <p>Hello! 👋 Welcome to <strong>Smarttopia Edutech</strong>.</p>
            <p>I am your AI Assistant. How can I help you build your tech career today?</p>
          </div>
        </div>
        <div class="chat-prompts-container" id="chatPrompts">
          <span class="prompts-label">Quick Questions:</span>
          <div class="prompts-grid">
            <button class="prompt-chip" data-prompt="What programs do you offer?">
              📚 What programs do you offer?
            </button>
            <button class="prompt-chip" data-prompt="Tell me about internship opportunities">
              💼 Internship Opportunities
            </button>
            <button class="prompt-chip" data-prompt="How does placement support work?">
              🎯 100% Placement Support
            </button>
            <button class="prompt-chip" data-prompt="Where is Smarttopia Edutech located and how to contact?">
              📍 Office Location & Contact
            </button>
            <button class="prompt-chip" data-prompt="What is Python & Django course syllabus and fees?">
              🐍 Python & Django Details
            </button>
            <button class="prompt-chip" data-prompt="Tell me about Data Science & AI programs">
              🤖 Data Science & AI/ML
            </button>
          </div>
        </div>
      `;
      // Re-attach prompt click handler to new prompts DOM
      const newPrompts = document.getElementById('chatPrompts');
      if (newPrompts) {
        newPrompts.addEventListener('click', (e) => {
          const chip = e.target.closest('.prompt-chip');
          if (chip) {
            const promptText = chip.getAttribute('data-prompt') || chip.innerText.trim();
            handleChatSubmit(promptText);
          }
        });
      }
    });
  }
});
