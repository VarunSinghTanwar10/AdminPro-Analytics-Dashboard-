document.addEventListener("DOMContentLoaded", () => {

    const body =
        document.body;

    const themeToggle =
        document.getElementById("themeToggle");

    const sidebar =
        document.querySelector(".sidebar");

    const sidebarToggle =
        document.getElementById("sidebarToggle");

    const mobileSidebarToggle =
        document.getElementById("mobileSidebarToggle");

    const tableSearch =
        document.getElementById("tableSearch");

    const rows =
        document.querySelectorAll(
            "#customerTable tbody tr"
        );

    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

    }

    else if (
        savedTheme !== "light"
        &&
        prefersDark
    ) {

        body.classList.add("dark");

    }

    function updateThemeIcon() {

        const icon =
            themeToggle.querySelector("i");

        if (
            body.classList.contains("dark")
        ) {

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

        }

        else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );

        }

    }

    updateThemeIcon();

    themeToggle.addEventListener(
        "click",
        () => {

            body.classList.toggle(
                "dark"
            );

            localStorage.setItem(
                "theme",
                body.classList.contains(
                    "dark"
                )
                    ? "dark"
                    : "light"
            );

            updateThemeIcon();

        }
    );

    sidebarToggle.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "collapsed"
            );

        }
    );

    mobileSidebarToggle.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "show"
            );

        }
    );

    document.addEventListener(
        "click",
        (e) => {

            if (
                window.innerWidth <= 768
                &&
                !sidebar.contains(
                    e.target
                )
                &&
                !mobileSidebarToggle.contains(
                    e.target
                )
            ) {

                sidebar.classList.remove(
                    "show"
                );

            }

        }
    );

    tableSearch.addEventListener(
        "keyup",
        () => {

            const value =
                tableSearch.value
                    .toLowerCase();

            rows.forEach(row => {

                const text =
                    row.innerText
                        .toLowerCase();

                row.style.display =
                    text.includes(value)
                        ? ""
                        : "none";

            });

        }
    );

    const revenueChart =
        document.getElementById(
            "revenueChart"
        );

    new Chart(revenueChart, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],

            datasets: [{

                label: "Revenue",

                data: [
                    12000,
                    18000,
                    15000,
                    22000,
                    26000,
                    30000,
                    28000,
                    34000,
                    39000,
                    43000,
                    47000,
                    52000
                ],

                borderColor: "#4f46e5",

                backgroundColor:
                    "rgba(79,70,229,.15)",

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    const salesChart =
        document.getElementById(
            "salesChart"
        );

    new Chart(salesChart, {

        type: "bar",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{

                label: "Sales",

                data: [
                    120,
                    190,
                    150,
                    220,
                    280,
                    320,
                    260
                ],

                backgroundColor: [
                    "#4f46e5",
                    "#4f46e5",
                    "#4f46e5",
                    "#4f46e5",
                    "#4f46e5",
                    "#4f46e5",
                    "#4f46e5"
                ],

                borderRadius: 10

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    const trafficChart =
        document.getElementById(
            "trafficChart"
        );

    new Chart(trafficChart, {

        type: "pie",

        data: {

            labels: [
                "Direct",
                "Social",
                "Referral",
                "Organic"
            ],

            datasets: [{

                data: [
                    35,
                    25,
                    20,
                    20
                ],

                backgroundColor: [
                    "#4f46e5",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444"
                ]

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

    const statNumbers =
        document.querySelectorAll(
            ".stat-card h3"
        );

    statNumbers.forEach(stat => {

        stat.style.opacity = "0";

        setTimeout(() => {

            stat.style.opacity = "1";

            stat.classList.add(
                "fade-in"
            );

        }, 300);

    });

});