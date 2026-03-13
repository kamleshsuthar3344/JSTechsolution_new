import React, { useEffect, useRef } from 'react';

const Snowfall: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;
        let snowflakes: Snowflake[] = [];

        class Snowflake {
            x: number = 0;
            y: number = 0;
            radius: number = 0;
            speed: number = 0;
            wind: number = 0;
            opacity: number = 0;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height - height;
                this.radius = Math.random() * 3 + 1;
                this.speed = Math.random() * 1 + 0.5;
                this.wind = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.y += this.speed;
                this.x += this.wind;

                if (this.y > height) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            const count = Math.floor((width * height) / 10000);
            snowflakes = Array.from({ length: Math.min(count, 150) }, () => new Snowflake());
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            snowflakes.forEach(snowflake => {
                snowflake.update();
                snowflake.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 50,
                opacity: 0.8
            }}
        />
    );
};

export default Snowfall;
