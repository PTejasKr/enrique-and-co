import React from 'react';
import styles from './stories.module.scss';
import Image from 'next/image';

export const metadata = {
    title: "Stories & Reviews | ENRIQUE",
    description: "What the world says about Enrique.",
};

export default function StoriesPage() {
    return (
        <main className={styles.container}>
            <div className={`container`}>
                <section className={styles.hero}>
                    <h1 className="animate-fade-in-up">The Narrative</h1>
                    <p className="animate-fade-in-up delay-100">
                        Beyond the mechanics lies the story. Explore the reception of our timepieces
                        and the individuals who define our legacy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Client Reviews</h2>
                    <div className={styles.reviewsGrid}>
                        <div className={styles.reviewCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"The weight of the ceramic is perfectly balanced. It doesn't scream for attention, yet everyone notices it. A true masterpiece of understated luxury."</p>
                            <div className={styles.author}>— Alexander V., Architect</div>
                        </div>
                        <div className={styles.reviewCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"I've owned Patek and AP, but the Enrique Chrono feels different. It feels personal. The customization process was a journey in itself."</p>
                            <div className={styles.author}>— James L., Entrepreneur</div>
                        </div>
                        <div className={styles.reviewCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"Finally, a brand that understands that silence is powerful. The 'Art of Restraint' isn't just a slogan; it's visible in every curve."</p>
                            <div className={styles.author}>— Sarah K., Gallery Owner</div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Media Centre</h2>
                    <div className={styles.mediaGrid}>
                        <article className={styles.newspaperSnippet}>
                            <h3>The Daily Chronos</h3>
                            <div className={styles.meta}>
                                <span>London, UK</span>
                                <span>October 12, 2024</span>
                            </div>
                            <p>
                                <strong>ENRIQUE SHAKES THE INDUSTRY</strong> — In a move that surprised the Swiss old guard,
                                newcomer Enrique has commanded the attention of collectors worldwide. By focusing on
                                "The Art of Restraint," the brand challenges the trend of maximalism. "It is refreshing,"
                                writes senior editor J. Doe. "To see a watch that doesn't try to be everything."
                            </p>
                        </article>
                        <article className={styles.newspaperSnippet}>
                            <h3>Le Temps Modern</h3>
                            <div className={styles.meta}>
                                <span>Paris, France</span>
                                <span>January 05, 2025</span>
                            </div>
                            <p>
                                <strong>A NEW ERA OF LUXURY?</strong> — The latest collection, 'Heritage Noir', has sold out
                                within minutes of its private viewing. Insiders suggest that Enrique's strategy of
                                limited production and high personalization is creating a demand curve rarely seen
                                since the early days of independent horology. The waitlist is now rumored to be 18 months.
                            </p>
                        </article>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>The Enrique Persona</h2>
                    <div className={styles.personaContent}>
                        <div className={styles.personaImage}>
                            {/* Placeholder for Persona Image - using a pattern or stock if available, or just a color block */}
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #13A495, #0a0a0a)' }}></div>
                        </div>
                        <div className={styles.personaText}>
                            <h3>The Architect of His Own Time</h3>
                            <p>
                                The Enrique client is not defined by demographics, but by psychographics.
                                He is a creator, a visionary, someone who values the process as much as the result.
                                He does not seek validation from logos, but finds satisfaction in intrinsic quality.
                            </p>
                            <p>
                                He moves through the world with purpose. Whether in a boardroom in Tokyo or
                                a gallery in Berlin, his presence is felt, not heard.
                            </p>
                            <ul>
                                <li>Values discretion over display.</li>
                                <li>Appreciates engineering as art.</li>
                                <li>Commands time, rather than chasing it.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
