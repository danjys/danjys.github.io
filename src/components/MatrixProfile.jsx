import React, { useEffect, useRef } from 'react';
import { preloadFonts } from '../js/utils';
import { TypeShuffle } from '../js/typeShuffle';
import styles from "./matrix.profile.css";

// Now we use TypeShuffle in a React component
const MatrixProfile = () => {
    const textRef = useRef(null);
    const tsRef = useRef(null);
    const interval = useRef(null);

    const MINUTE_MS = 30000;

    useEffect(() => {
        // Initialize TypeShuffle when the component mounts
        tsRef.current = new TypeShuffle(textRef.current);

        interval.current = setInterval(() => {
            tsRef.current.trigger(`fx6`);
            //tsRef.current.trigger(`fx${Math.floor(Math.random() * (6 - 1 + 1) + 1)}`);
          }, MINUTE_MS);

        // Cleanup on unmount
        return () => {
            if (tsRef.current) {
                tsRef.current = null;
            }
            if(interval.current){
                interval.current = null;
            }
        };
    }, []);

    const handleEffectClick = (effectId) => {
        if (tsRef.current) {
            tsRef.current.trigger(`fx${effectId}`);
        }
    };

    return (
        <div className="relative grid place-content-center px-8 py-12">
            <main>
                <dl className="content" ref={textRef}>
                    <dt>Name</dt>
                    <dd>Dhananjaya Somanna</dd>
                    <dt>Profession</dt>
                    <dd>Full stack development</dd>
                    <dt>Bio</dt>
                    <dd>20+ years experience - C++, React JS, Python, AWS. Passion for creativity in the digital space. Problem solver. Constantly seeking new challenges, growth opportunities. Bringing imaginative ideas to life. Skilled in modern web development frameworks such as React and Angular. Strong understanding of UI/UX design principles and ability to create visually appealing and usable websites.</dd>
                    <dt>Projects</dt>
                    <dd>Jarvis, Airbnb, Robinhood, Coinbase</dd>
                </dl>
                {/* x
                <div className="effects">
                    <button onClick={() => handleEffectClick(1)}>Effect 1</button>
                    <button onClick={() => handleEffectClick(2)}>Effect 2</button>
                    <button onClick={() => handleEffectClick(3)}>Effect 3</button>
                    <button onClick={() => handleEffectClick(4)}>Effect 4</button>
                    <button onClick={() => handleEffectClick(5)}>Effect 5</button>
                    <button onClick={() => handleEffectClick(6)}>Effect 6</button>
                </div>
               */}
            </main>
        </div>
    );
};

export default MatrixProfile;
