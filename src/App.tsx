import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Slide, {
  AnimatedContent,
  GradientText,
  Card,
  ListItem,
  HighlightBox,
  Badge,
  Comparison,
  Timeline,
  ChartBar,
} from './components/Slide';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => setScrollProgress(v * 100));
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="presentation">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Slide 1 - Hero */}
      <Slide variant="dark" showOrbs showGrid showParticles id="slide-1">
        <AnimatedContent delay={0}>
          <h1 className="slide__title slide__title--hero">
            Как зарабатывать <GradientText>Удалённо</GradientText> в{' '}
            <GradientText>долларах</GradientText> из СНГ
          </h1>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__subtitle">работая на компании США</p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <div className="slide__divider" />
        </AnimatedContent>
        <AnimatedContent delay={0.6}>
          <Badge>Система "SmartWorker"</Badge>
        </AnimatedContent>
      </Slide>

      {/* Slide 2 - Bonus */}
      <Slide variant="gradient" showOrbs id="slide-2">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Хотите Узнать, Как Быстро Начать Получать Зарплату в{' '}
            <GradientText>$USD</GradientText>, Работая Удалённо на Компании из США?
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <HighlightBox>Эксклюзивный Бонус для Участников Интенсива!</HighlightBox>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text">
            Прямо сейчас оставьте свой номер телефона и получите БОНУС, который мы
            подготовили только для вас - участников этого интенсива!
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <p className="slide__text">
            Этот бонус поможет вам сделать первый шаг к вашей цели!
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.5}>
          <p className="slide__text slide__text--highlight">
            Оставьте телефон и Заберите Свой Бонус!
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.6}>
          <p className="slide__text" style={{ opacity: 0.8 }}>
            Не упустите свой шанс! Предложение действует только в рамках интенсива.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 3 - About Us */}
      <Slide variant="dark" showGrid id="slide-3">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Кто мы и почему <GradientText>нас стоит слушать?</GradientText>
          </h2>
        </AnimatedContent>
        <div className="slide__cards">
          <Card
            icon="🇺🇸"
            title="Recrutu (США)"
            text="Наша основная компания, рекрутинговое агентство, которое находит идеальных работников для американских работодателей."
            delay={0.2}
          />
          <Card
            icon="🌍"
            title="SmartWorker (СНГ)"
            text="Наша миссия - показать как вам, квалифицированным специалистам из СНГ, получить прямой доступ к этим долларовым возможностям."
            delay={0.4}
          />
        </div>
      </Slide>

      {/* Slide 4 - Author */}
      <Slide variant="gradient" showOrbs id="slide-4">
        <AnimatedContent>
          <Badge>Автор системы</Badge>
        </AnimatedContent>
        <div className="slide__content--split">
          <AnimatedContent direction="left" delay={0.2}>
            <div className="slide__image">👤</div>
          </AnimatedContent>
          <AnimatedContent direction="right" delay={0.3}>
            <h2 className="slide__title" style={{ textAlign: 'left' }}>
              <GradientText>Нурсултан Адильханов</GradientText>
            </h2>
            <p className="slide__subtitle" style={{ textAlign: 'left' }}>
              (Основатель Recrutu & SmartWorker)
            </p>
            <p className="slide__text" style={{ textAlign: 'left' }}>
              Наш основатель — Нурсултан Адильханов. Он провел более 8 лет в США, изучив
              культуру найма изнутри. Эти практики позволили ему получить должность
              виртуального ассистента у доктора Эрика Берга, чьи YouTube-каналы
              насчитывают более <strong>14 миллионов подписчиков</strong>.
            </p>
            <p className="slide__text" style={{ textAlign: 'left' }}>
              Наша система основана на этом глубоком опыте и доказана работой с топовыми
              медиа-личностями США.
            </p>
          </AnimatedContent>
        </div>
      </Slide>

      {/* Slide 5 - Why Project */}
      <Slide variant="dark" showGrid showParticles id="slide-5">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Почему появился проект</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Рынок удалённой работы в странах СНГ и Средней Азии не так развит.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text">
            В результате люди даже не задумываются о такой возможности или сталкиваются с
            мифами, которые их останавливают.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <HighlightBox>
            В то время как у нас много образованных людей и специалистов, которым эта
            возможность доступна.
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 6 - Why Project Part 2 */}
      <Slide variant="gradient" showOrbs id="slide-6">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Почему появился проект</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Мы столкнулись с регулярными проблемами с работниками из Филиппин, Бангладеша,
            стран Латинской Америки. Люди пропадали, срывали сроки. Работодатели нам
            писали, что они недорабатывают, завышают рабочие часы.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <HighlightBox>
            Подобных Проблем со студентами SmartWorker У нас не было ни разу!
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 7 - For Whom */}
      <Slide variant="dark" showGrid id="slide-7">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Для кого этот интенсив?</GradientText>
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="❓" delay={0.1}>
            Не можете найти комфортную для себя вакансию
          </ListItem>
          <ListItem icon="🌐" delay={0.2}>
            Знаете английский, но не понимаете, как его монетизировать?
          </ListItem>
          <ListItem icon="📊" delay={0.3}>
            Чувствуете, что ваш доход упёрся в "потолок"?
          </ListItem>
          <ListItem icon="🚗" delay={0.4}>
            Тратите часы на дорогу и соблюдение скучного дресс-кода, вместо того чтобы
            работать комфортно из дома
          </ListItem>
        </ul>
        <AnimatedContent delay={0.5}>
          <p className="slide__text" style={{ opacity: 0.7, fontStyle: 'italic' }}>
            Если вы не уверены в своём английском, не падайте духом, про это мы тоже
            расскажем
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 8 - Solution */}
      <Slide variant="yellow" id="slide-8">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large" style={{ color: '#0A0A0F' }}>
            Решение: Прямой выход на рынок США
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <div className="slide__stats">
            <div className="slide__stat">
              <div className="slide__stat-value" style={{ color: '#0A0A0F' }}>
                от $7
              </div>
              <div className="slide__stat-label" style={{ color: '#0A0A0F' }}>
                в час
              </div>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text" style={{ color: '#0A0A0F' }}>
            — это стартовая реальность для базовых "офисных" должностей
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <HighlightBox>
            <span style={{ color: '#0A0A0F' }}>
              $1260+ в месяц за неполный день или от $2520+ при полной занятости.
            </span>
          </HighlightBox>
        </AnimatedContent>
        <AnimatedContent delay={0.5}>
          <h3 style={{ color: '#0A0A0F', marginTop: '2rem' }}>
            Будущее удалённого специалиста:
          </h3>
        </AnimatedContent>
      </Slide>

      {/* Slide 9 - Salary Chart */}
      <Slide variant="dark" showGrid id="slide-9">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Разница, которую вы увидите уже{' '}
            <GradientText>через месяц работы</GradientText>
          </h2>
        </AnimatedContent>
        <div className="slide__chart">
          <ChartBar
            label="Зарплата офис-менеджера в регионе"
            value={400}
            maxValue={2000}
            displayValue="$400"
            delay={0.2}
          />
          <ChartBar
            label="Зарплата офис-менеджера в Бишкеке/Алматы"
            value={700}
            maxValue={2000}
            displayValue="$700"
            delay={0.4}
          />
          <ChartBar
            label="Зарплата Executive Assistant на удалёнке"
            value={1800}
            maxValue={2000}
            displayValue="$1800+"
            delay={0.6}
          />
        </div>
        <AnimatedContent delay={0.8}>
          <p className="slide__text" style={{ opacity: 0.6, fontSize: '0.875rem' }}>
            Источник: hh.kz
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 10 - What You'll Learn */}
      <Slide variant="gradient" showOrbs id="slide-10">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Что вы узнаете сегодня</GradientText>
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="I" delay={0.1}>
            Почему это РЕАЛЬНО для вас (даже без опыта и диплома).
          </ListItem>
          <ListItem icon="II" delay={0.2}>
            Как "упаковать" себя, чтобы вас захотели нанять.
          </ListItem>
          <ListItem icon="III" delay={0.3}>
            Пошаговая система подготовки к поиску первого клиента.
          </ListItem>
          <ListItem icon="IV" delay={0.4}>
            вы нашли работу. Что дальше?
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 11 - Why Companies Hire */}
      <Slide variant="dark" showGrid showParticles id="slide-11">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Почему американским компаниям выгодно{' '}
            <GradientText>нанимать ВАС?</GradientText>
          </h2>
        </AnimatedContent>
        <div className="slide__cards">
          <Card
            icon="🎯"
            title="Доступ к талантам"
            text="Находят мотивированных специалистов за пределами своего дорогого рынка."
            delay={0.2}
          />
          <Card
            icon="✅"
            title="Надежность и этика"
            text="Специалисты из СНГ известны своей ответственностью и качеством работы."
            delay={0.3}
          />
          <Card
            icon="💰"
            title="Экономическая выгода"
            text="Умное бизнес-решение, которое экономит им деньги."
            delay={0.4}
          />
        </div>
      </Slide>

      {/* Slide 12 - Myths Intro */}
      <Slide variant="gradient" showOrbs id="slide-12">
        <AnimatedContent>
          <h2 className="slide__title slide__title--hero">
            Какие <GradientText>мифы</GradientText> останавливают потенциального
            удалённого работника в наших странах?
          </h2>
        </AnimatedContent>
      </Slide>

      {/* Slide 13 - Myth 1 */}
      <Slide variant="dark" showGrid id="slide-13">
        <AnimatedContent>
          <Badge>Миф #1</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            "Мне нужен востребованный <GradientText>диплом топового вуза</GradientText>"
          </h2>
        </AnimatedContent>
        <Comparison
          leftTitle="Что НЕ ВАЖНО"
          leftItems={['Ваша "корочка"', 'Опыт работы в местной компании']}
          rightTitle="Что ДЕЙСТВИТЕЛЬНО ВАЖНО"
          rightItems={[
            'Ваши реальные навыки',
            'Ваша надежность и адекватность',
            'Способность решать поставленные задачи',
          ]}
        />
      </Slide>

      {/* Slide 14 - Myth 2 */}
      <Slide variant="gradient" showOrbs id="slide-14">
        <AnimatedContent>
          <Badge>Миф #2</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            "Мой английский должен быть <GradientText>идеальным</GradientText>"
          </h2>
        </AnimatedContent>
        <Comparison
          leftTitle="НЕ НУЖЕН"
          leftItems={[
            'Оксфордский акцент и идеальная грамматика',
            'Литературный английский',
            'Сложные идиомы и безупречное произношение',
          ]}
          rightTitle="НУЖЕН"
          rightItems={[
            '«Рабочий» английский (B1-B2)',
            'Ясность и умение донести мысль',
            'Надежность и готовность понять клиента',
          ]}
        />
      </Slide>

      {/* Slide 15 - Myth 3 */}
      <Slide variant="dark" showGrid showParticles id="slide-15">
        <AnimatedContent>
          <Badge>Миф #3</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            "Удаленка — это только для <GradientText>программистов</GradientText>"
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <HighlightBox>
            Реальность: 8 из 10 удаленных вакансий не требуют навыков программирования.
          </HighlightBox>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text">
            Примеры: Виртуальный ассистент, менеджер соцсетей, специалист по поддержке, и
            десятки других.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <div className="slide__social-icons">
            <div className="slide__social-icon">📅</div>
            <div className="slide__social-icon">🎧</div>
            <div className="slide__social-icon">📱</div>
            <div className="slide__social-icon">⌨️</div>
            <div className="slide__social-icon">🔍</div>
          </div>
        </AnimatedContent>
      </Slide>

      {/* Slide 16 - System vs Chaos */}
      <Slide variant="gradient" showOrbs id="slide-16">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Почему хаотичные попытки <GradientText>не работают</GradientText>
          </h2>
        </AnimatedContent>
        <Comparison
          leftTitle="ХАОС"
          leftItems={[
            '100+ отправленных резюме',
            'Выгорание, разочарование',
            'Демпинг на фриланс-биржах',
          ]}
          rightTitle="СИСТЕМА"
          rightItems={[
            'Точечный поиск нужных клиентов',
            'Четкая "упаковка" себя (LinkedIn, видео)',
            'Офферы со ставкой от $7/час ($1200+ в месяц)',
          ]}
        />
        <AnimatedContent delay={0.5}>
          <HighlightBox>Мы дадим вам проверенный алгоритм вместо слепой удачи</HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 17 - Why 95% Give Up */}
      <Slide variant="dark" showGrid id="slide-17">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Почему <GradientText>95% людей</GradientText> сдаются?
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <h3 className="slide__subtitle">Поиск работы без системы — это:</h3>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="📧" delay={0.2}>
            100+ отправленных резюме без ответа
          </ListItem>
          <ListItem icon="😫" delay={0.3}>
            Эмоциональное выгорание
          </ListItem>
          <ListItem icon="❌" delay={0.4}>
            Мысли "это не для меня"
          </ListItem>
        </ul>
        <AnimatedContent delay={0.5}>
          <HighlightBox>Наш подход: Не больше, а эффективнее.</HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 18 - Upwork Trap */}
      <Slide variant="gradient" showOrbs id="slide-18">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Почему Upwork и Fiverr — это <GradientText>ловушка?</GradientText>
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="⚠️" delay={0.2}>
            <strong>Огромный демпинг:</strong> Конкуренция с тысячами исполнителей за
            $3/час.
          </ListItem>
          <ListItem icon="⭐" delay={0.3}>
            <strong>Нулевой рейтинг:</strong> Без отзывов вас просто не видят.
          </ListItem>
        </ul>
        <AnimatedContent delay={0.4}>
          <HighlightBox>Наш путь: Прямые контакты. Вы - охотник, а не жертва.</HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 19 - Scaling */}
      <Slide variant="dark" showGrid showParticles id="slide-19">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Масштабирование</GradientText>
          </h2>
        </AnimatedContent>
        <Timeline
          items={[
            { value: '$7/час', label: 'Старт' },
            { value: '$15-25/час', label: '12-18 месяцев' },
            { value: '$50/час', label: 'Потенциал' },
          ]}
        />
        <AnimatedContent delay={0.5}>
          <p className="slide__text">
            Мы показали, что эта система позволяет выйти на $50/час (даже без
            IT-специальности). Это тот путь который прошёл наш основатель, и который
            доступен каждому, кто готов трудиться и прокачиваться.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.6}>
          <HighlightBox>
            Система дает не только старт, но и возможность масштабирования дохода.
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 20 - Dr. Berg */}
      <Slide variant="gradient" showOrbs id="slide-20">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Откуда мы это знаем?</GradientText>
          </h2>
        </AnimatedContent>
        <div className="slide__content--split">
          <AnimatedContent direction="left" delay={0.2}>
            <p className="slide__text" style={{ textAlign: 'left' }}>
              <strong>Доктор Берг</strong> — один из крупнейших медицинских
              YouTube-блогеров (<strong>14M+ подписчиков</strong>)
            </p>
            <p className="slide__text" style={{ textAlign: 'left' }}>
              <strong>Задача:</strong> Найти Виртуального Ассистента, который сможет
              управлять его сложным графиком и контентом.
            </p>
            <p className="slide__text" style={{ textAlign: 'left' }}>
              <strong>Результат:</strong> Мы доказали, что квалификация важнее географии.
              Наш подход позволил Нурсултану Адильханов, человеку из СНГ, обойти
              американских кандидатов и получить эту роль с оплатой{' '}
              <strong>$50/час</strong>.
            </p>
          </AnimatedContent>
          <AnimatedContent direction="right" delay={0.4}>
            <div className="slide__image">📚</div>
          </AnimatedContent>
        </div>
      </Slide>

      {/* Slide 21 - Reputation */}
      <Slide variant="dark" showGrid id="slide-21">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Ваша репутация — <GradientText>ваш актив</GradientText>
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="💎" delay={0.2}>
            <strong>Решение демпинга:</strong> Мы предлагаем надежность, а не самую
            низкую цену.
          </ListItem>
          <ListItem icon="🏆" delay={0.3}>
            <strong>Репутация СНГ:</strong> Работники из нашего региона имеют репутацию
            ответственных, лояльных и исполнительных специалистов.
          </ListItem>
          <ListItem icon="🎯" delay={0.4}>
            <strong>Ваша задача:</strong> Правильно подать себя в прямом контакте как
            квалифицированного специалиста, для которого $7/час — это справедливый старт
            за надежность.
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 22 - Getting Started */}
      <Slide variant="gradient" showOrbs id="slide-22">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            С чего начать, если <GradientText>"ничего не умеешь"?</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Выберите ОДНУ простую роль. Ваша цель — зайти на рынок.
          </p>
        </AnimatedContent>
        <div className="slide__cards">
          <Card
            icon="📋"
            title="Virtual Assistant (VA)"
            text="Организация задач, календаря, почты."
            delay={0.3}
          />
          <Card
            icon="📱"
            title="Social Media Assistant"
            text="Помощь с контентом и сообщениями."
            delay={0.4}
          />
          <Card
            icon="🎧"
            title="Customer Support"
            text="Ответы на вопросы клиентов."
            delay={0.5}
          />
        </div>
      </Slide>

      {/* Slide 23 - Advanced Niches */}
      <Slide variant="dark" showGrid showParticles id="slide-23">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Ниши для продвинутых</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Эти роли требуют наличия базовых навыков, но дают быстрый рост дохода
          </p>
        </AnimatedContent>
        <div className="slide__cards">
          <Card
            icon="🎨"
            title="Graphic Designer"
            text="Дизайн контента для соцсетей, простые креативы."
            delay={0.3}
          />
          <Card
            icon="💼"
            title="Sales Closer"
            text="Закрытие сделок по скрипту (телефон/чат)."
            delay={0.4}
          />
          <Card
            icon="🔍"
            title="Lead Generation Specialist"
            text="Поиск потенциальных клиентов (по готовому алгоритму)."
            delay={0.5}
          />
        </div>
      </Slide>

      {/* Slide 24 - LinkedIn Intro */}
      <Slide variant="gradient" showOrbs id="slide-24">
        <AnimatedContent>
          <h2 className="slide__title slide__title--hero">
            как настроить профиль и находить работодателей в{' '}
            <GradientText>LinkedIn</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text">
            Мы коснемся также поиска работы в Facebook и Instagram, где эти принципы тоже
            будут работать
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 25 - LinkedIn Profile */}
      <Slide variant="dark" showGrid id="slide-25">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Превращаем профиль LinkedIn из "невидимки" в{' '}
            <GradientText>"магнит для клиентов"</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <div className="slide__code">
            <span className="slide__code-comment">// Было:</span>
            <br />
            <span className="slide__code-string">"I am an Executive Assistant"</span>
            <br />
            <br />
            <span className="slide__code-comment">// Стало:</span>
            <br />
            <span className="slide__code-string">
              "I am a [ваша желаемая должность] and I help [целевой клиент] to [результат]
              by [ваш навык]"
            </span>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <p className="slide__text" style={{ opacity: 0.7 }}>
            Не расписывайте слишком длинно, иначе ваш профиль могут просто не прочитать.
            Пишите коротко, но по существу.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 26 - Final Touches */}
      <Slide variant="gradient" showOrbs id="slide-26">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Последние штрихи</GradientText> перед стартом
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="📷" delay={0.1}>
            <strong>Фото:</strong> Профессиональное, улыбчивое фото (никаких селфи или
            фото в солнцезащитных очках).
          </ListItem>
          <ListItem icon="📝" delay={0.2}>
            <strong>Summary:</strong> 3-4 предложения о том, кому вы помогаете и какие
            проблемы решаете.
          </ListItem>
          <ListItem icon="💼" delay={0.3}>
            <strong>Опыт:</strong> Описывайте не "должности", а РЕЗУЛЬТАТЫ своих действий
            (даже на местной работе).
          </ListItem>
          <ListItem icon="⚡" delay={0.4}>
            <strong>Навыки:</strong> Укажите ключевые навыки (например, Trello, Google
            Calendar, Customer Service).
          </ListItem>
        </ul>
        <AnimatedContent delay={0.5}>
          <HighlightBox>
            Профиль готов. Теперь мы можем начать отправлять запросы на Connections
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 27 - Connections */}
      <Slide variant="dark" showGrid showParticles id="slide-27">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Connections: Секрет прямого выхода на <GradientText>CEO</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            <strong>Connection (Связь)</strong> — это ваш контакт, установленный в
            LinkedIn (как друг или подписчик). Это валюта платформы, определяющая вашу
            активность.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <h3 className="slide__subtitle">3 Уровня Связей:</h3>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="1" delay={0.4}>
            <strong>1-й уровень:</strong> Ваши прямые контакты (те, кто с вами уже
            законнектился).
          </ListItem>
          <ListItem icon="2" delay={0.5}>
            <strong>2-й уровень:</strong> Контакты ваших контактов (люди, с которыми вы
            можете связаться через общий connection).
          </ListItem>
          <ListItem icon="3" delay={0.6}>
            <strong>3-й уровень:</strong> Люди за пределами вашей сети 1-го и 2-го
            уровней.
          </ListItem>
        </ul>
        <AnimatedContent delay={0.7}>
          <p className="slide__text">
            Наш метод прямого поиска основан на работе с 2-м и 3-м уровнями. Это позволяет
            вам выйти напрямую на лиц, принимающих решения, минуя HR
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 28 - Who to Connect */}
      <Slide variant="gradient" showOrbs id="slide-28">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            С кем надо <GradientText>коннектиться</GradientText> в LinkedIn?
          </h2>
        </AnimatedContent>
        <div className="slide__cards">
          <Card icon="👤" title="Владельцы / Business Owner" text="" delay={0.2} />
          <Card icon="🚀" title="Основатели / Founder" text="" delay={0.3} />
          <Card icon="👔" title="CEO/Президенты / CEO/President" text="" delay={0.4} />
        </div>
      </Slide>

      {/* Slide 29 - LinkedIn Screenshot */}
      <Slide variant="dark" showGrid id="slide-29">
        <AnimatedContent>
          <div className="slide__image" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
            🔍 LinkedIn Search: "Business Owner"
            <br />
            Filters: People, United States, 1st/2nd/3rd
          </div>
        </AnimatedContent>
      </Slide>

      {/* Slide 30 - Key Message */}
      <Slide variant="gradient" showOrbs showParticles id="slide-30">
        <AnimatedContent>
          <h2 className="slide__title slide__title--hero">
            Мы ищем не вакансии. Мы ищем <GradientText>людей</GradientText>, которые
            принимают решения.
          </h2>
        </AnimatedContent>
      </Slide>

      {/* Slide 31 - Video Resume */}
      <Slide variant="dark" showGrid id="slide-31">
        <AnimatedContent>
          <Badge>Ваше секретное оружие</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            <GradientText>30-секундное видео-резюме</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <h3 className="slide__subtitle">Простой скрипт</h3>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <div className="slide__code">
            <span className="slide__code-string">
              "Hi, [Имя клиента], thank you for connecting.
              <br />I help [тип клиента] with [задача]
              <br />I saw your profile and would love to help you with [конкретная идея]
              <br />
              Let me know if you are open to a quick chat."
            </span>
          </div>
        </AnimatedContent>
      </Slide>

      {/* Slide 32 - Why Video */}
      <Slide variant="gradient" showOrbs id="slide-32">
        <AnimatedContent>
          <p className="slide__text">
            Это видео мы отправляем тем людям, которые с нами "законнектились". Зачем мы
            записываем видео:
          </p>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="❤️" delay={0.2}>
            <strong>Эмоциональный Коннект:</strong> Помогает клиенту увидеть вашу
            адекватность и улыбку (то, чего нет в тексте).
          </ListItem>
          <ListItem icon="🗣️" delay={0.3}>
            <strong>Демонстрация Английского:</strong> Сразу снимает вопросы о вашем
            уровне B1.
          </ListItem>
          <ListItem icon="⭐" delay={0.4}>
            <strong>Выделяетесь:</strong> 99% кандидатов этого не делают. Вы — 1%
            избранных.
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 33 - Message Template */}
      <Slide variant="dark" showGrid showParticles id="slide-33">
        <AnimatedContent>
          <Badge>Шаблон, который работает</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            Что делать дальше, когда с вами <GradientText>"законнектились"?</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__subtitle">
            Шаблон текстового сообщения, которое привлечет внимание:
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <div className="slide__code">
            <span className="slide__code-string">
              "Hi, [Имя], thank you for connecting.
              <br />I help [тип клиента] with [задача]
              <br />
              I've recorded a short video with an idea for your business:
              <br />
              [ссылка на ваше 30-секундное видео]
              <br />
              Would you be open to a 10-minute chat next week?"
            </span>
          </div>
        </AnimatedContent>
      </Slide>

      {/* Slide 34 - No Projects */}
      <Slide variant="gradient" showOrbs id="slide-34">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>"Но у меня нет проектов!"</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Вам не нужны реальные клиенты, чтобы сделать портфолио.
          </p>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="💡" delay={0.3}>
            <strong>Идея:</strong> Сделайте "учебный" проект.
          </ListItem>
          <ListItem icon="📅" delay={0.4}>
            <strong>Пример:</strong> Для VA — скриншот идеально организованного Google
            Календаря на неделю.
          </ListItem>
          <ListItem icon="🎯" delay={0.5}>
            <strong>Главное:</strong> Показать не опыт, а ваш подход к работе.
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 35 - Four Pillars */}
      <Slide variant="dark" showGrid id="slide-35">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Итог: <GradientText>Четыре столпа</GradientText> прямого поиска
          </h2>
        </AnimatedContent>
        <div className="slide__cards">
          <Card
            icon="1"
            title="Точность (LinkedIn Search)"
            text="Мы не рассылаем резюме всем. Мы ищем только лиц, принимающих решения (CEO, Owner, Founder), которые точно нуждаются в помощи."
            delay={0.2}
          />
          <Card
            icon="2"
            title="Ценность (Video Resume)"
            text="Вы не просите работу. Вы предлагаете решение их конкретной проблемы."
            delay={0.3}
          />
          <Card
            icon="3"
            title="Контакт"
            text="Мы обходим HR, используя сеть Connections, чтобы говорить с клиентом напрямую."
            delay={0.4}
          />
          <Card
            icon="4"
            title="Доверие (Reputation)"
            text="Ваш профиль и видео сразу снимают возражения о надежности и языке."
            delay={0.5}
          />
        </div>
        <AnimatedContent delay={0.6}>
          <HighlightBox>
            В итоге вы получаете ответ, потому что вы — не один из тысяч, а предложенное
            решение.
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 36 - Facebook & Instagram */}
      <Slide variant="gradient" showOrbs id="slide-36">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Facebook и Instagram:</GradientText> Поиск в неформальной среде
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <div className="slide__social-icons">
            <div className="slide__social-icon" style={{ fontSize: '3rem' }}>
              📘
            </div>
            <div className="slide__social-icon" style={{ fontSize: '3rem' }}>
              📷
            </div>
          </div>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="📘" delay={0.3}>
            <strong>Facebook:</strong> Ищите тематические группы ("Coaches & Consultants").
          </ListItem>
          <ListItem icon="📷" delay={0.4}>
            <strong>Instagram:</strong> Ищите по хэштегам (#businesscoach,
            #realestateagent).
          </ListItem>
          <ListItem icon="🎯" delay={0.5}>
            <strong>Стратегия та же:</strong> Будьте полезны, а не навязчивы.
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 37 - Interview */}
      <Slide variant="dark" showGrid showParticles id="slide-37">
        <AnimatedContent>
          <h2 className="slide__title slide__title--hero">
            <GradientText>Собеседование:</GradientText> Как получить "Да"
          </h2>
        </AnimatedContent>
      </Slide>

      {/* Slide 38 - Main Rule */}
      <Slide variant="gradient" showOrbs id="slide-38">
        <AnimatedContent>
          <Badge>Главное правило</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            Это не экзамен, а <GradientText>деловой разговор</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <HighlightBox>
            Ваша цель — показать, что вы адекватный и надежный человек, с которым приятно
            работать
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 39 - Experience Question */}
      <Slide variant="dark" showGrid id="slide-39">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Ответ на вопрос{' '}
            <GradientText>"Расскажите о своем опыте"</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <h3 className="slide__subtitle">Что говорить, если опыта нет?</h3>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="1" delay={0.3}>
            <strong>Свяжите с их задачей:</strong> "Да, у меня нет опыта, но я отлично
            справляюсь с [задача, указанная в их профиле.]"
          </ListItem>
          <ListItem icon="2" delay={0.4}>
            <strong>Покажите навыки связанные с задачей:</strong> "Умею организовывать
            календарь, работать с Google Docs и т.д."
          </ListItem>
          <ListItem icon="3" delay={0.5}>
            <strong>Предложите тест:</strong> "Я буду рад выполнить небольшое тестовое
            задание."
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 40 - STAR Method */}
      <Slide variant="gradient" showOrbs id="slide-40">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Что говорить, если опыт <GradientText>ЕСТЬ?</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <Badge>Формула STAR</Badge>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="S" delay={0.3}>
            <strong>Situation:</strong> Кратко опишите ситуацию или контекст предыдущей
            работы.
          </ListItem>
          <ListItem icon="T" delay={0.4}>
            <strong>Task:</strong> Опишите задачу, которую нужно было решить (свяжите с их
            проблемой!).
          </ListItem>
          <ListItem icon="A" delay={0.5}>
            <strong>Action:</strong> Опишите свои действия, которые привели к результату.
          </ListItem>
          <ListItem icon="R" delay={0.6}>
            <strong>Result:</strong> Дайте измеримый результат (например, "снизил время на
            15%", "увеличил продажи на $2000").
          </ListItem>
        </ul>
        <AnimatedContent delay={0.7}>
          <HighlightBox>
            Работодателей интересуют не ваши обязанности, а ваши достижения.
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 41 - Money Talk */}
      <Slide variant="dark" showGrid showParticles id="slide-41">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Как говорить о деньгах <GradientText>уверенно</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <div className="slide__code">
            <span className="slide__code-string">
              "My starting rate is $7/hour. I'm open to a paid trial period for the first
              week to make sure we're a great fit for each other."
            </span>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <p className="slide__text">
            <strong>Почему это работает:</strong> Называете ставку, но сразу показываете
            фокус на результате.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 42 - Got the Offer */}
      <Slide variant="yellow" id="slide-42">
        <AnimatedContent>
          <h2 className="slide__title slide__title--hero" style={{ color: '#0A0A0F' }}>
            Вы получили оффер! Как все не испортить
          </h2>
        </AnimatedContent>
      </Slide>

      {/* Slide 43 - First 30 Days */}
      <Slide variant="dark" showGrid id="slide-43">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Ваши первые <GradientText>30 дней:</GradientText> Как стать незаменимым
          </h2>
        </AnimatedContent>
        <Comparison
          leftTitle="Do ✅"
          leftItems={[
            'Всегда сдавайте работу на час раньше срока.',
            'Ваши вопросы должны быть о результате, а не о процессе.',
            'Говорите: "Я не знаю, как это сделать, но разберусь и вернусь с решением через 30 минут."',
          ]}
          rightTitle="Don\'t ❌"
          rightItems={[
            'Никогда не нарушайте дедлайн, даже если он кажется несущественным.',
            'Не пропадайте без предупреждения. Всегда сообщайте о задержках заранее.',
            'Не говорите: "Я не знаю" или "Это невозможно"',
          ]}
          leftType="positive"
          rightType="negative"
        />
      </Slide>

      {/* Slide 44 - Scaling Income */}
      <Slide variant="gradient" showOrbs id="slide-44">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Масштабирование:</GradientText> Ваша зарплата может вырасти в
            2-3 раза за 1.5 года!
          </h2>
        </AnimatedContent>
        <Timeline
          items={[
            { value: '$7/час', label: 'Старт' },
            { value: '$15/час', label: 'Эксперт' },
            { value: '$25/час', label: 'Второй клиент' },
          ]}
        />
        <AnimatedContent delay={0.5}>
          <p className="slide__text">
            Американский рынок ценит трудовую этику выше всего. Если вы следуете правилам
            первых 30 дней, ваш рост будет быстрым
          </p>
        </AnimatedContent>
        <Timeline
          items={[
            { value: '$1200', label: 'СТАРТ' },
            { value: '$2580', label: 'эксперт' },
            { value: '$4300', label: 'второй клиент' },
          ]}
        />
      </Slide>

      {/* Slide 45 - Success Stories */}
      <Slide variant="dark" showGrid showParticles id="slide-45">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>Истории успеха</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__subtitle">Они уже смогли. Теперь ваша очередь.</p>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <div className="slide__stories">
            <div className="slide__story">👤</div>
            <div className="slide__story">👤</div>
            <div className="slide__story">👤</div>
          </div>
        </AnimatedContent>
      </Slide>

      {/* Slide 46 - Problems */}
      <Slide variant="gradient" showOrbs id="slide-46">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Если у вас возникли проблемы с{' '}
            <GradientText>самостоятельным поиском работы</GradientText>
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="❓" delay={0.2}>
            Вы не уверены в оформлении профиля LinkedIn, который реально работает?
          </ListItem>
          <ListItem icon="🔍" delay={0.3}>
            Вы не можете найти подходящего работодателя?
          </ListItem>
          <ListItem icon="😰" delay={0.4}>
            Вы боитесь собеседований или не знаете, что говорить о ставке?
          </ListItem>
          <ListItem icon="📊" delay={0.5}>
            Вы чувствуете, что вашего скиллсета не хватает для этих вакансий?
          </ListItem>
        </ul>
        <AnimatedContent delay={0.6}>
          <p className="slide__text">
            Мы знаем, что все это - реальные преграды. И мы помогли уже больше сотни
            специалистов из СНГ их преодолеть.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 47 - SmartWorker Package */}
      <Slide variant="yellow" id="slide-47">
        <AnimatedContent>
          <Badge>SmartWorker Package</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--hero" style={{ color: '#0A0A0F' }}>
            Карьера в США:
            <br />
            Executive Virtual Assistant
          </h2>
        </AnimatedContent>
      </Slide>

      {/* Slide 48 - Module 1 */}
      <Slide variant="dark" showGrid id="slide-48">
        <AnimatedContent>
          <Badge>Модуль 1</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            <GradientText>Обучение</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Сначала мы дадим вам профессию. Вы пройдете полный курс "Executive Virtual
            Assistant", где освоите все главные платформы и задачи, которые требуются
            прямо сейчас на рынке США. Вы станете специалистом, за которым охотятся.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 49 - Module 2 */}
      <Slide variant="gradient" showOrbs id="slide-49">
        <AnimatedContent>
          <Badge>Модуль 2</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            <GradientText>Сопровождение</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Мы не бросим вас после обучения. Вы получаете персональное ведение от команды
            SmartWorker. Наша задача — довести вас до результата. Вы получаете полную
            поддержку в чате и по email, разбор ваших резюме, помощь в переговорах и
            ответы на любой вопрос на каждом этапе.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 50 - Bonus 1 */}
      <Slide variant="dark" showGrid showParticles id="slide-50">
        <AnimatedContent>
          <Badge>БОНУС #1</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            <GradientText>Прямой Мост к Работодателям</GradientText>
            <br />
            Эксклюзивные Showcase Ивенты
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Это наша «секретная разработка». Мы сами организуем ивенты, куда приводим
            американских работодателей, жаждущих нанять таланты. А вы получаете
            эксклюзивную возможность представить себя и свои навыки напрямую этим CEO. Это
            самый короткий путь к офферу
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 51 - Bonus 2 */}
      <Slide variant="gradient" showOrbs id="slide-51">
        <AnimatedContent>
          <Badge>БОНУС #2</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            Доступ к нашей <GradientText>закрытой базе вакансий</GradientText>
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Мы не просто учим вас, 'где искать'. Мы даем вам рыбу. Вы получаете полный
            доступ к нашей внутренней базе американских работодателей, с которыми мы уже
            работаем. Это проверенные компании, которые доверяют нам и ищут именно наших
            выпускников.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 52 - Bonus 3 */}
      <Slide variant="dark" showGrid id="slide-52">
        <AnimatedContent>
          <Badge>БОНУС #3</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            <GradientText>Закрытый Telegram-канал</GradientText>
            <br />
            Ассистентов
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            В одиночку идти сложно. Поэтому мы немедленно добавим вас в наше сообщество.
            Это закрытый Telegram-канал, где «старички», которые уже работают в США,
            делятся опытом и поддерживают «новичков». Вы найдете партнеров, получите
            инсайды и поймете, что вы не одни.
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 53 - Bonus 4 */}
      <Slide variant="gradient" showOrbs id="slide-53">
        <AnimatedContent>
          <Badge>БОНУС #4</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <h2 className="slide__title slide__title--large">
            <GradientText>Авторская книга-гайд Нурсултана</GradientText> (PDF)
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Чтобы у вас с первого дня была полная ясность, вы получаете личный учебник от
            Нурсултана. Это пошаговый план действий, все наши проверенные стратегии и
            шаблоны писем. Вы не будете гадать, что делать дальше — у вас будет четкая
            дорожная карта к быстрому старту
          </p>
        </AnimatedContent>
      </Slide>

      {/* Slide 54 - Pricing Comparison */}
      <Slide variant="dark" showGrid showParticles id="slide-54">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Сколько стоят подобные услуги у{' '}
            <GradientText>ДРУГИХ</GradientText> рекрутинговых агентств:
          </h2>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="💎" delay={0.2}>
            Флагманская программа «Карьера в США»: (Основная ценность) -{' '}
            <strong>$897</strong>
          </ListItem>
          <ListItem icon="🎪" delay={0.3}>
            БОНУС: Showcase Ивенты: (Уникально и ценно) - <strong>$497</strong>
          </ListItem>
          <ListItem icon="📋" delay={0.4}>
            БОНУС: Доступ к базе вакансий: (Прямая выгода) - <strong>$397</strong>
          </ListItem>
          <ListItem icon="💬" delay={0.5}>
            БОНУС: Закрытый Telegram-канал: (Годовая поддержка) - <strong>$247</strong>
          </ListItem>
          <ListItem icon="📚" delay={0.6}>
            БОНУС: Книга-гайд Нурсултана: (Продукт) - <strong>$97</strong>
          </ListItem>
        </ul>
      </Slide>

      {/* Slide 55 - Full Package */}
      <Slide variant="gradient" showOrbs id="slide-55">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            <GradientText>НАША ГЛАВНАЯ ЦЕЛЬ:</GradientText>
            <br />
            ТРУДОУСТРОЙСТВО СТУДЕНТА.
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <p className="slide__text">
            Чтобы гарантировать это, вы получаете полный пакет:
          </p>
        </AnimatedContent>
        <ul className="slide__list">
          <ListItem icon="✓" delay={0.3}>
            Программа «Карьера в США» + Ведение
          </ListItem>
          <ListItem icon="✓" delay={0.35}>
            Бонус: Showcase Ивенты с работодателями
          </ListItem>
          <ListItem icon="✓" delay={0.4}>
            Бонус: Доступ к закрытой базе вакансий
          </ListItem>
          <ListItem icon="✓" delay={0.45}>
            Бонус: Закрытый Telegram-канал
          </ListItem>
          <ListItem icon="✓" delay={0.5}>
            Бонус: Книга-гайд Нурсултана
          </ListItem>
        </ul>
        <AnimatedContent delay={0.6}>
          <h3 className="slide__subtitle">Во сколько бы вы оценили это предложение?</h3>
        </AnimatedContent>
      </Slide>

      {/* Slide 56 - Final Price */}
      <Slide variant="yellow" id="slide-56">
        <AnimatedContent>
          <Badge>Последняя возможность</Badge>
        </AnimatedContent>
        <AnimatedContent delay={0.1}>
          <p className="slide__text" style={{ color: '#0A0A0F' }}>
            Это лучшее соотношение цены и ценности, которое вы найдете сегодня.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <div className="slide__stats">
            <div className="slide__stat">
              <div className="slide__stat-value" style={{ color: '#0A0A0F' }}>
                $500
              </div>
              <div className="slide__stat-label" style={{ color: '#0A0A0F' }}>
                Цена для участников интенсива
              </div>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text" style={{ color: '#0A0A0F' }}>
            Жизнь наших студентов совершенно поменялась, когда они получили свой первый
            оффер с оплатой в долларах. Вы можете стать следующими.
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <div className="slide__contact">
            <div className="slide__contact-item" style={{ background: 'rgba(0,0,0,0.1)' }}>
              <span className="slide__contact-icon">📱</span>
              <span style={{ color: '#0A0A0F' }}>Telegram: @thirsty_invest31</span>
            </div>
            <div className="slide__contact-item" style={{ background: 'rgba(0,0,0,0.1)' }}>
              <span className="slide__contact-icon">📞</span>
              <span style={{ color: '#0A0A0F' }}>WhatsApp: +7 700 131 0304</span>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={0.5}>
          <HighlightBox>
            <span style={{ color: '#0A0A0F' }}>
              Напишите в чат «хочу» + номер телефона (WhatsApp), чтобы забронировать своё
              место
            </span>
          </HighlightBox>
        </AnimatedContent>
      </Slide>

      {/* Slide 57 - Final CTA */}
      <Slide variant="dark" showOrbs showGrid showParticles id="slide-57">
        <AnimatedContent>
          <h2 className="slide__title slide__title--large">
            Хотите Узнать, Как Быстро Начать Получать Зарплату в{' '}
            <GradientText>$USD</GradientText>, Работая Удалённо на Компании из США?
          </h2>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <HighlightBox>Эксклюзивный Бонус для Участников Интенсива!</HighlightBox>
        </AnimatedContent>
        <AnimatedContent delay={0.3}>
          <p className="slide__text">
            Прямо сейчас оставьте свой номер телефона и получите БОНУС, который мы
            подготовили только для вас - участников этого интенсива!
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.4}>
          <p className="slide__text">
            Этот бонус поможет вам сделать первый шаг к вашей цели!
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.5}>
          <p className="slide__text slide__text--highlight">
            Оставьте телефон и заберите свой бонус!
          </p>
        </AnimatedContent>
        <AnimatedContent delay={0.6}>
          <p className="slide__text" style={{ opacity: 0.8 }}>
            Не упустите свой шанс! Предложение действует только в рамках интенсива.
          </p>
        </AnimatedContent>
      </Slide>
    </div>
  );
}

export default App;
