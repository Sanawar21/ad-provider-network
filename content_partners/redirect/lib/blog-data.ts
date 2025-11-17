export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI-Driven Design",
    excerpt:
      "Exploring how artificial intelligence is reshaping the design landscape and creating new possibilities for creative professionals.",
    content: `Artificial Intelligence has become a transformative force in the design industry. From generative design to intelligent layout systems, AI is enabling designers to work faster and think bigger.

The integration of machine learning algorithms in design tools is revolutionizing how we approach creative problems. AI can analyze vast amounts of design data to suggest layouts, color palettes, and typography combinations that work harmoniously together.

What was once a time-consuming process of iteration and refinement can now be accelerated with intelligent recommendations. However, the human touch remains irreplaceable. The most successful designs combine AI efficiency with human creativity and emotional intelligence.

Looking ahead, we can expect AI to handle more repetitive tasks while designers focus on strategic thinking and innovation. This shift will elevate the profession, creating more room for imagination and artistic expression.

The future of design is not about replacing designers with AI, but rather augmenting human capability with intelligent tools.`,
    date: "2025-01-15",
    author: "Alex Chen",
    category: "AI",
    readTime: 5,
  },
  {
    id: "2",
    title: "Web Performance Optimization Guide",
    excerpt:
      "Deep dive into the techniques and tools that modern developers use to create lightning-fast web applications.",
    content: `Performance is a critical aspect of modern web development. In an era where milliseconds matter, optimizing your web application can significantly impact user experience and conversion rates.

Core Web Vitals have emerged as the standard metrics for measuring web performance. These include Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).

Key optimization strategies include:
- Code splitting and lazy loading
- Image optimization and responsive images
- Minification and compression
- Caching strategies
- CDN usage
- Server-side rendering optimization

Tools like Lighthouse, WebPageTest, and Chrome DevTools provide comprehensive insights into performance bottlenecks. Regular monitoring and continuous optimization are essential practices.

Modern frameworks like Next.js and Remix have built-in performance optimizations that can significantly reduce the effort required to build fast applications.

Remember: performance optimization is not a one-time task but an ongoing process that requires constant attention and improvement.`,
    date: "2025-01-12",
    author: "Jordan Smith",
    category: "Dev",
    readTime: 8,
  },
  {
    id: "3",
    title: "Glassmorphism in Modern UI",
    excerpt:
      "Understanding the design trend that combines transparency, blur, and layering to create stunning visual interfaces.",
    content: `Glassmorphism has emerged as one of the most popular design trends in recent years. This aesthetic combines frosted glass effects, transparency, and layering to create modern, sophisticated interfaces.

The key characteristics of glassmorphism include:
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders
- Layered depth
- Light shadows
- Careful color contrast

When implemented thoughtfully, glassmorphism can create beautiful, modern interfaces that feel premium and contemporary. However, it's important to use it judiciously to maintain readability and accessibility.

Glassmorphism works particularly well for overlays, cards, and navigation elements. It creates a sense of depth and sophistication while maintaining visual hierarchy.

Tools like Figma, Adobe XD, and modern CSS (backdrop-filter) make it easier than ever to implement glassmorphism in both design and code.

The trend demonstrates how modern design is moving toward more subtle, refined aesthetics that prioritize user experience while maintaining visual appeal.`,
    date: "2025-01-08",
    author: "Sam Patel",
    category: "Design",
    readTime: 6,
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating web applications that work for everyone, regardless of ability.",
    content: `Web accessibility is not just a nice-to-have feature; it's a fundamental requirement for modern web development. An accessible web benefits everyone, from users with disabilities to those on slow connections.

Key accessibility principles include:
- Semantic HTML markup
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation
- Color contrast
- Alt text for images
- Form labels and error messages

Tools like WAVE, Axe, and Lighthouse can help identify accessibility issues in your application. However, automated tools can only catch about 30% of issues; manual testing and user feedback are essential.

Testing with real assistive technologies like screen readers is crucial. Tools like NVDA and JAWS are commonly used by people with visual impairments.

Creating accessible applications requires a shift in mindset. It's not about adding accessibility as an afterthought but building it into the design and development process from the beginning.

An accessible web is a better web for everyone.`,
    date: "2025-01-05",
    author: "Morgan Lee",
    category: "Accessibility",
    readTime: 7,
  },
  {
    id: "5",
    title: "React Server Components Explained",
    excerpt: "Understanding the paradigm shift brought by React Server Components and how they change web development.",
    content: `React Server Components (RSCs) represent a fundamental shift in how we think about client-server architecture in React applications. They allow you to write components that run exclusively on the server.

Key benefits of RSCs include:
- Reduced JavaScript sent to the browser
- Direct database access without APIs
- Sensitive information stays on the server
- Better performance and improved developer experience
- Automatic code splitting

With RSCs, you can fetch data directly in components without needing separate API routes. This simplifies the data flow and reduces the complexity of your application architecture.

Server Components work seamlessly with Client Components, allowing you to use each where it makes sense. This hybrid approach gives you the flexibility to optimize for performance while maintaining interactivity.

Frameworks like Next.js have fully embraced RSCs and built their latest features around them. This represents a significant evolution in how React applications are structured and optimized.

As React continues to evolve, Server Components will become increasingly important in building performant, scalable web applications.`,
    date: "2025-01-02",
    author: "Casey Brown",
    category: "Dev",
    readTime: 9,
  },
  {
    id: "6",
    title: "Color Psychology in Digital Design",
    excerpt: "How colors influence user behavior and emotions in digital interfaces.",
    content: `Colors are one of the most powerful tools in a designer's arsenal. They influence emotions, guide attention, and impact user behavior. Understanding color psychology is essential for creating effective digital interfaces.

Different colors evoke different emotions:
- Red: Energy, urgency, passion
- Blue: Trust, calm, professionalism
- Green: Growth, health, nature
- Yellow: Optimism, happiness, energy
- Purple: Creativity, luxury, mystery
- Orange: Enthusiasm, warmth, friendliness

Brand colors play a crucial role in creating brand recognition and loyalty. A well-chosen color palette can make your brand instantly recognizable.

Cultural context matters too. Colors have different meanings in different cultures, so it's important to consider your audience when choosing your color scheme.

Contrast and accessibility are equally important. Sufficient color contrast ensures readability for all users, including those with color blindness.

When designing, remember that color should enhance and support your content, not overpower it. A thoughtful, cohesive color scheme is the foundation of good design.`,
    date: "2024-12-30",
    author: "Riley Chen",
    category: "Design",
    readTime: 5,
  },
]
