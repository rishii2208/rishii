/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li>
                
              
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Engineering"
                  href="https://www.dtu.ac.in"
                >
                  Engineering @DTU<small></small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022 - 2026</b>
                </a>
                <p>
                I joined DTU as an engineering undergrad in 2022 with limited knowledge of Python and JavaScript. Immersed in a dynamic environment, I honed my skills through projects, hackathons, and internships. Late-night coding, intense brainstorming, and overcoming challenges shaped me into a resilient developer. Each setback fueled my growth, and every success reinforced my passion. Beyond coding, DTU instilled in me teamwork, adaptability, and the drive to innovate. From a curious beginner to a confident problem-solver, this journey has been transformative. As I move forward, I am eager to embrace new challenges and make a lasting impact in tech
                </p>
              </li>
              <li>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Engineering"
                  href="https://www.linkedin.com/company/zebpay"
                >
                  Ex Intern@ZebPay<small></small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Mar- Aug 2024</b>
                </a>
                <p>
                Contributed to the Fullstack team in deploying and integrating version 3.0 of their site  with 5 million active monthly users.Developed a powerful SIP toolkit, analyzing 58 key parameters to provide insightful investment analytics in a visual format. Leveraged technologies like Next.js, React.js, MongoDB, AWS, Docker, and Kubernetes to build scalable and efficient solution, optimizing both backend integration and frontend visualization.
                </p>
              </li>

              <li>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Engineering"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                >
                  Self Employed<small></small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Sep 2024 - Jan 2025</b>
                </a>
                <p>
                  I worked in 4 main projects during this timeline.Upskilled myself,explored emerging technologies to stay ahead in the ever-evolving tech landscape. This period fostered adaptability, problem-solving, and a deep understanding of real-world development challenges
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        {/*<PageWrapper
          className="mb-5"
          aria-label="You are now in my Projects Section"
        >
          <article>
            <h4>My  projects.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Human Centered Design 101"
                  href="https://www.plusacumen.org/courses/introduction-human-centered-design"
                >
                  Human Centered Design 101. <small>Acumen</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2017 - 2018</b>
                </a>
                <p>
                  This is an intensive, hands-on learning experience that will
                  challenge you to get out of your chair and out into the real
                  world to talk to people and test your ideas. You’ll leave this
                  experience equipped and energized to apply the human-centered
                  design process to challenges across industries, sectors, and
                  geographies to generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                >
                  Data Structure And Algorithm. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  Many developers who are &quot;self taught&quot;, feel that one
                  of the main disadvantages they face compared to college
                  educated graduates in computer science is the fact that they
                  don&apos;t have knowledge about algorithms, data structures
                  and the notorious Big-O Notation
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.edx.org/course/adaptive-leadership-in-development"
                >
                  Adaptive Leadership. <small>edX</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  This introductory course helps you identify and make progress
                  on a leadership challenge in your own life, team, or
                  community. You’ll apply the tools and techniques of Adaptive
                  Leadership, a practical framework developed at Harvard Kennedy
                  School of Government for leading change, particularly during
                  times of uncertainty or when there are no easy answers.{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/"
                >
                  Learning to Learn [Efficient Learning] <small>udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Improve memory & productivity using the skills of the world's
                  top performers and learning strategies proven by research.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Learning Something Great 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p>We continue learning everyday. </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
           */}

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my Projects and Achievements section"
        >
          <article>
            <h4>Projects and Achievements</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Crypto Price Predictor"
                  href="https://crypto-price-predictor.streamlit.app/"
                >
                 Cyrpto Price Predictor<small></small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="Open Lofii Playlist"
                  href="https://github.com/rishii2208/AI-Based-model-to-predict-crypto-price"
                  className="float-right"
                >
                  View
                </a>
                <p>
                Development of LTSM Model based crypto price prediction tool. Trained Model has been recorded 0.0011-0.2314 Validation 

Loss as compared to real market price. 50+ dynamic pointers and sentiment analysis are also used in model to predict price
accurately. 
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://www.roundtabledtu.in/"
                >
                  Roundtable Website <small></small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://github.com"
                  className="float-right"
                >
                  View
                </a>
                <p>
                Optimized code to improve component loading times, resulting in a more responsive and efficient user experience. 
Extensively utilized TypeScript to enhance code quality, ensuring robust type-checking and reducing runtime errors, reducing loading 

time by 54%. 
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://github.com/rishii2208/ParkEase"
                >
                  Finalists@ Walmart Sparkathon <small></small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://github.com/rishii2208/ParkEase"
                  className="float-right"
                >
                  View 
                </a>
                <p>Finalist out of 2700+ teams at Walmart Sparkathon Hackathon 2024</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://www.instagram.com/invictus_dtu/"
                >
                  Chief Coordinator@<small>Invictus</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://www.instagram.com/invictus_dtu/"
                  className="float-right"
                >
                  View 
                </a>
                <p>Hlped in organising 3 24 hour+ hackathons with 1500+ particpations, 4 coding competitions with 
                1000+ participation teams and several other workshops and seminars.</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://dtu.ac.in/Web/coea/bulletin/LabonWheel.pdf"
                >
                  Community Outreach<small>/</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://dtu.ac.in/Web/coea/bulletin/LabonWheel.pdf"
                  className="float-right"
                >
                  View 
                </a>
                <p>Instructed 20+ underprivileged school students in basic computer science and Python programming through the 'Lab on Wheels' initiative by the Office of Extension & Outreach Activites, in collaboration with a dedicated team of instructors, from April to October 2023.!</p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        {/*
        <PageWrapper aria-label="You are now in lens section">
          <article>
            <h4>My Photochromic Lens.</h4>
            <ul className="timeline">
              <li>
                <Link href="/lens">
                  Adenekan's Collection. <small>©Adenekan</small>
                </Link>
                <Link href="/lens" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  This is an intensive, curation of the photochromic lenses that
                  standout and the ones that i personally love, NOTE this is
                  just by preference actually.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
        */}
        
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/resume" className="mt-3 mb-5">
          Lets Continue To Resume
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
