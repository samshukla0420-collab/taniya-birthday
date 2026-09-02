document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================
           FLOATING HEARTS
        ========================= */

        function createHeart() {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            const symbols = [
                "❤️",
                "💕",
                "💗",
                "💖",
                "✨",
                "♡"
            ];

            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 +
                Math.random() * 25) +
                "px";

            heart.style.animationDuration =
                (5 +
                Math.random() * 5) +
                "s";

            document.body.appendChild(
                heart
            );


            setTimeout(
                function () {
                    heart.remove();
                },
                11000
            );

        }


        setInterval(
            createHeart,
            600
        );



        /* =========================
           CAKE CUTTING
        ========================= */

        const cake =
            document.getElementById(
                "cake"
            );

        const message =
            document.getElementById(
                "messageBox"
            );


        if (cake && message) {

            cake.addEventListener(
                "click",
                function () {

                    if (
                        cake.classList.contains(
                            "cut"
                        )
                    ) {
                        return;
                    }


                    cake.classList.add(
                        "cut"
                    );


                    /* Celebration */

                    for (
                        let i = 0;
                        i < 40;
                        i++
                    ) {

                        setTimeout(
                            function () {

                                createCelebration();

                            },
                            i * 25
                        );

                    }


                    setTimeout(
                        function () {

                            message.classList.add(
                                "show"
                            );

                            message.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        },
                        900
                    );

                }
            );

        }



        /* =========================
           CELEBRATION
        ========================= */

        function createCelebration() {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "floating-heart";

            item.innerHTML =
                [
                    "🎉",
                    "✨",
                    "💕",
                    "🎈",
                    "❤️"
                ][
                    Math.floor(
                        Math.random() * 5
                    )
                ];

            item.style.left =
                (30 +
                Math.random() * 40) +
                "vw";

            item.style.bottom =
                (30 +
                Math.random() * 20) +
                "vh";

            item.style.animationDuration =
                "3s";

            document.body.appendChild(
                item
            );


            setTimeout(
                () => item.remove(),
                4000
            );

        }



        /* =========================
           MEMORY PHOTO REVEAL
        ========================= */

        const cards =
            document.querySelectorAll(
                ".memory-card"
            );


        if (cards.length) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "show"
                                    );

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: .15
                    }
                );


            cards.forEach(
                function (card, index) {

                    card.style.transitionDelay =
                        (index * 100) +
                        "ms";

                    observer.observe(
                        card
                    );

                }
            );

        }



        /* =========================
           LETTER ANIMATION
        ========================= */

        const lines =
            document.querySelectorAll(
                ".letter-line"
            );


        if (lines.length) {

            lines.forEach(
                function (line, index) {

                    setTimeout(
                        function () {

                            line.classList.add(
                                "reveal"
                            );

                        },

                        700 +
                        index * 1000

                    );

                }
            );

        }



        /* =========================
           BUTTON CLICK EFFECT
        ========================= */

        const buttons =
            document.querySelectorAll(
                ".magic-btn"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        const ripple =
                            document.createElement(
                                "span"
                            );

                        ripple.style.position =
                            "absolute";

                        ripple.style.width =
                            "10px";

                        ripple.style.height =
                            "10px";

                        ripple.style.borderRadius =
                            "50%";

                        ripple.style.background =
                            "rgba(255,255,255,.7)";

                        ripple.style.left =
                            event.offsetX +
                            "px";

                        ripple.style.top =
                            event.offsetY +
                            "px";

                        ripple.style.transform =
                            "translate(-50%,-50%)";

                        ripple.style.pointerEvents =
                            "none";

                        ripple.animate(
                            [
                                {
                                    width: "10px",
                                    height: "10px",
                                    opacity: 1
                                },

                                {
                                    width: "400px",
                                    height: "400px",
                                    opacity: 0
                                }
                            ],
                            {
                                duration: 600
                            }
                        );

                        button.appendChild(
                            ripple
                        );


                        setTimeout(
                            function () {
                                ripple.remove();
                            },
                            650
                        );

                    }
                );

            }
        );


    }
);