import { type ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface SlideProps {
  children: ReactNode;
  variant?: 'dark' | 'light' | 'gradient' | 'yellow';
  className?: string;
  id?: string;
  showOrbs?: boolean;
  showGrid?: boolean;
  showParticles?: boolean;
}

const Slide = ({
  children,
  variant = 'dark',
  className = '',
  id,
  showOrbs = false,
  showGrid = false,
  showParticles = false,
}: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }))
  );

  return (
    <section
      ref={ref}
      id={id}
      className={`slide slide--${variant} ${className}`}
    >
      {/* Background Effects */}
      {showOrbs && (
        <div className="slide__bg-effect">
          <div className="slide__bg-orb slide__bg-orb--1" />
          <div className="slide__bg-orb slide__bg-orb--2" />
          <div className="slide__bg-orb slide__bg-orb--3" />
        </div>
      )}

      {showGrid && <div className="slide__grid-bg" />}

      {showParticles && (
        <div className="slide__particles">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        className="slide__content"
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>

      {/* SmartWorker Logo */}
      <div className="slide__logo">SMARTWORKER</div>
    </section>
  );
};

export default Slide;

// Animation wrapper for staggered children
interface AnimatedContentProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const AnimatedContent = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: AnimatedContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  const initial = { opacity: 0, ...directions[direction] };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Animated text with gradient effect
interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => (
  <span className={`text-gradient ${className}`}>{children}</span>
);

// Animated counter
interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

// Card component
interface CardProps {
  icon?: string;
  title: string;
  text: string;
  delay?: number;
}

export const Card = ({ icon, title, text, delay = 0 }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="slide__card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {icon && <div className="slide__card-icon">{icon}</div>}
      <h4 className="slide__card-title">{title}</h4>
      <p className="slide__card-text">{text}</p>
    </motion.div>
  );
};

// List item with animation
interface ListItemProps {
  icon?: string | number;
  children: ReactNode;
  delay?: number;
}

export const ListItem = ({ icon, children, delay = 0 }: ListItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.li
      ref={ref}
      className="slide__list-item"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="slide__list-icon">{icon || '✓'}</span>
      <span>{children}</span>
    </motion.li>
  );
};

// Highlight box
interface HighlightBoxProps {
  children: ReactNode;
}

export const HighlightBox = ({ children }: HighlightBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="slide__highlight-box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Badge component
interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => (
  <motion.span
    className="slide__badge"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.span>
);

// Comparison component
interface ComparisonProps {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  leftType?: 'positive' | 'negative';
  rightType?: 'positive' | 'negative';
}

export const Comparison = ({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  leftType = 'negative',
  rightType = 'positive',
}: ComparisonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="slide__comparison"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`slide__comparison-col slide__comparison-col--${leftType}`}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h4 className={`slide__comparison-title slide__comparison-title--${leftType}`}>
          {leftTitle}
        </h4>
        <ul className="slide__comparison-list">
          {leftItems.map((item, i) => (
            <li key={i} className="slide__comparison-item">
              <span className="slide__comparison-icon">
                {leftType === 'negative' ? '✗' : '✓'}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={`slide__comparison-col slide__comparison-col--${rightType}`}
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h4 className={`slide__comparison-title slide__comparison-title--${rightType}`}>
          {rightTitle}
        </h4>
        <ul className="slide__comparison-list">
          {rightItems.map((item, i) => (
            <li key={i} className="slide__comparison-item">
              <span className="slide__comparison-icon">
                {rightType === 'positive' ? '✓' : '✗'}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

// Timeline component
interface TimelineProps {
  items: { value: string; label: string }[];
}

export const Timeline = ({ items }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="slide__timeline"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {items.map((item, i) => (
        <>
          <motion.div
            key={i}
            className="slide__timeline-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="slide__timeline-value">{item.value}</div>
            <div className="slide__timeline-label">{item.label}</div>
          </motion.div>
          {i < items.length - 1 && (
            <motion.span
              className="slide__timeline-arrow"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 + 0.1 }}
            >
              →
            </motion.span>
          )}
        </>
      ))}
    </motion.div>
  );
};

// Chart Bar component
interface ChartBarProps {
  label: string;
  value: number;
  maxValue: number;
  displayValue: string;
  delay?: number;
}

export const ChartBar = ({ label, value, maxValue, displayValue, delay = 0 }: ChartBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const width = (value / maxValue) * 100;

  return (
    <div ref={ref} className="slide__chart-bar">
      <div className="slide__chart-label">{label}</div>
      <div className="slide__chart-track">
        <motion.div
          className="slide__chart-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${width}%` } : { width: 0 }}
          transition={{ duration: 1, delay }}
        >
          {displayValue}
        </motion.div>
      </div>
    </div>
  );
};
