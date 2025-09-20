import { IFAQ } from "../types/interfaces"

export const faq: IFAQ[] = [
    // Top 10 commonly searched/googled Arduino questions
    {
        question: "What is an Arduino and which board should I buy first?",
        answer: "Arduino is an open-source electronics platform based on easy-to-use hardware and software. For beginners, the Arduino Uno (or compatible) is recommended due to its large community, plentiful tutorials, and USB connectivity.",
        hyper_link: "https://www.arduino.cc/",
        link_description: "Official Arduino website"
    },
    {
        question: "How do I install the Arduino IDE?",
        answer: "Download the Arduino IDE or use Arduino CLI from the official Arduino website. Choose the installer for your OS (Windows/macOS/Linux) and follow the installation steps. On Windows, install driver if prompted.",
        hyper_link: "https://www.arduino.cc/en/software",
        link_description: "Arduino IDE download"
    },
    {
        question: "How do I upload a sketch to my Arduino?",
        answer: "Connect the board via USB, select the correct board and COM/port in the IDE, open or write a sketch, then click Upload. If you see 'Done uploading', the sketch is on the board.",
        hyper_link: "https://www.arduino.cc/en/Tutorial/BuiltInExamples",
        link_description: "Using the Arduino IDE"
    },
    {
        question: "Why is my Arduino not detected by my computer?",
        answer: "Common causes: missing drivers, bad USB cable (power-only), board in a bad state, incorrect USB port, or faulty USB-to-serial chip on cheap clones. Try another cable/port and install drivers from the board vendor.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "What's the difference between 5V and 3.3V boards?",
        answer: "5V boards (e.g., Uno, Mega) use 5 volts for logic; 3.3V boards (e.g., many ESP32, some SAMD boards) use 3.3 volts. Using the wrong voltage can damage sensors or the board — check sensor voltage compatibility.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "How do I power an Arduino safely from a battery?",
        answer: "Use a regulated voltage supply that matches your board (usually 5V or 7–12V into VIN with onboard regulator). For portable projects, use USB power banks or regulated LiPo with a proper charger and voltage regulator.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "What is a sketch?",
        answer: "A sketch is an Arduino program written in C/C++ that runs on the board. It contains setup() (runs once) and loop() (repeats) functions.",
        hyper_link: "https://www.arduino.cc/reference/en/language/structure/",
        link_description: "Arduino language reference"
    },
    {
        question: "What are pins 'digital', 'analog', 'PWM'?",
        answer: "Digital pins read/write HIGH or LOW. Analog input pins read a voltage (ADC). PWM pins simulate analog output using pulse-width modulation — useful for dimming LEDs or motor speed control.",
        hyper_link: "https://www.arduino.cc/reference/en/language/functions/analog-io/",
        link_description: "Arduino I/O reference"
    },
    {
        question: "Why does my circuit reset when I connect a component?",
        answer: "This often indicates a power issue: the component draws too much current or causes a short. Check wiring, add decoupling capacitors, and ensure your power supply can deliver the needed current.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "How do I use libraries in Arduino sketches?",
        answer: "Install libraries via the Arduino IDE Library Manager or place them in your sketchbook's libraries folder. Then include with #include <LibraryName.h> and follow the library examples.",
        hyper_link: "https://www.arduino.cc/en/Guide/Libraries",
        link_description: "Using libraries"
    },

    // 10 curated commonly asked topics (opinionated)
    {
        question: "What's the easiest way to learn electronics for Arduino?",
        answer: "Start with basic components: LEDs, resistors, buttons, and a breadboard. Follow beginner tutorials that explain Ohm's law, circuits, and safe wiring. Small experiments teach faster than only reading.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "How do I read a sensor value and display it?",
        answer: "Use an analog or digital input depending on the sensor. Read values with analogRead/digitalRead, optionally map or filter them, and print to Serial for debugging or display on an LCD/OLED.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "What is debounce and why do I need it for buttons?",
        answer: "Mechanical buttons produce noisy on/off signals when pressed. Debouncing (software delay, state filtering, or hardware RC filters) prevents multiple triggers from one press.",
        hyper_link: "https://www.arduino.cc/en/Tutorial/BuiltInExamples/Debounce",
        link_description: "Debounce tutorial"
    },
    {
        question: "How can I power motors without damaging my Arduino?",
        answer: "Use a separate power supply for motors and common ground. Add flyback diodes for DC motors or motor drivers (H-bridge) with proper current ratings to protect the board.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "Can I connect multiple Arduinos together?",
        answer: "Yes. Use serial (UART), I2C, or SPI to communicate between boards. Plan which board is master/slave and handle addressing and voltage-level compatibility.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "Why does my analogRead return values that jump around?",
        answer: "Analog readings can be noisy. Use averaging, smoothing filters, proper grounding, and avoid sharing ADC pins with PWM or high-current lines. Shielding helps in noisy environments.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "How do I update firmware on newer boards (e.g., ESP32, SAMD)?",
        answer: "For boards with onboard USB, use the Arduino IDE or platform-specific tools. Some boards require a bootloader or flashing tool (e.g., esptool for ESP). Follow the board vendor instructions.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "What are good practices for prototyping vs production?",
        answer: "Prototype on breadboards, test thoroughly, then move to soldered perfboard or PCB for production. Use proper connectors, enclosures, and consider power safety and EMI when moving to production.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "How do I troubleshoot a non-working sketch?",
        answer: "Use Serial.print for debugging, test hardware separately, check wiring, try known-good example sketches, and isolate components. Simplify the sketch to the minimal code that reproduces the issue.",
        hyper_link: "",
        link_description: ""
    },
    {
        question: "Can I use Arduino with Python or other languages?",
        answer: "Yes. Arduino boards can communicate over serial with Python (pySerial), or you can use MicroPython on supported boards (ESP32, some SAMD variants). Choose the toolchain that fits your project.",
        hyper_link: "",
        link_description: ""
    }
]
