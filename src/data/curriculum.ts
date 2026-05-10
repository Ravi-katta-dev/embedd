import React from 'react';

export interface Topic {
  id: string;
  title: string;
  completed: boolean;
  content?: string;
  codeExamples?: string[];
  diagram?: string;
  duration?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  topics: Topic[];
}

export const curriculum: Module[] = [
  {
    id: 'c-prog',
    title: 'Advanced C Programming',
    description: 'Mastering pointers, memory management, and low-level optimizations essential for embedded systems.',
    icon: 'Code2',
    duration: '4 Weeks',
    level: 'Beginner',
    topics: [
      {
        id: 'c1',
        title: 'Data Types & Storage Classes',
        completed: true,
        content: 'In embedded C, understanding storage classes (static, extern, volatile) is crucial for memory mapping and hardware interaction. The volatile keyword prevents compiler optimizations on variables that may change unexpectedly.',
        codeExamples: [
          '// Example: Volatile variable usage\\nvolatile uint32_t *status_reg = (uint32_t *)0x40001000;',
          '// Example: Static vs Extern\\nstatic int counter = 0;\\nextern int global_counter;'
        ],
        diagram: 'graph TD\\nA[Memory Address] --> B[volatile Variable]\\nC[Compiler Optimization] --> D[volatile Keyword]'
      },
      {
        id: 'c2',
        title: 'Memory Mapping in C',
        completed: false,
        content: 'Directly accessing hardware registers requires casting integer addresses to pointers. This is a common pattern in low-level driver development.',
        codeExamples: [
          '#define GPIO_BASE 0x40020000\\n#define GPIO_MODER (*(volatile uint32_t *)(GPIO_BASE + 0x00))\\n\\nvoid init_gpio() {\\n    GPIO_MODER |= (1 << 10);\\n}'
        ],
        diagram: 'graph TD\\nA[GPIO_BASE] --> B[GPIO_MODER]\\nC[Bit 10] --> D[Pin 5 Output]'
      },
      {
        id: 'c3',
        title: 'Pointers & Arrays',
        completed: false,
        content: 'Pointers are fundamental to embedded systems. They provide direct memory access, which is essential for hardware register manipulation and efficient data structures.',
        codeExamples: [
          '// Pointer arithmetic for buffer processing\\nuint8_t *buffer = (uint8_t *)0x20001000;\\nfor(int i = 0; i < 10; i++) {\\n    buffer[i] = i * 2;\\n}'
        ],
        diagram: 'graph TD\\nA[Pointer] --> B[Memory Address]\\nC[Array Index] --> D[Offset Calculation]'
      },
      {
        id: 'c4',
        title: 'Structs & Bitfields',
        completed: false,
        content: 'Structs and bitfields allow you to organize hardware register layouts and memory-mapped device configurations in a clean, readable way.',
        codeExamples: [
          'typedef struct {\\n    uint32_t MODER: 10;\\n    uint32_t OSPEEDR: 10;\\n    uint32_t AFR: 12;\\n} GPIO_TypeDef;'
        ],
        diagram: 'graph TD\\nA[Struct] --> B[Bitfield MODER]\\nA --> C[Bitfield OSPEEDR]\\nA --> D[Bitfield AFR]'
      }
    ]
  },
  {
    id: 'mcu-basics',
    title: 'MCU Architecture & Peripherals',
    description: 'Understanding microcontroller internals, clock systems, and peripheral configuration.',
    icon: 'Cpu',
    duration: '3 Weeks',
    level: 'Beginner',
    topics: [
      {
        id: 'm1',
        title: 'ARM Cortex-M Overview',
        completed: false,
        content: 'The ARM Cortex-M series is designed for microcontroller applications. It features a Harvard architecture with separate instruction and data buses.',
        codeExamples: [
          '// Exception handling setup\\n__asm__ volatile (\"cpsie i\"); // Enable interrupts'
        ],
        diagram: 'graph TD\\nA[Cortex-M Core] --> B[ NVIC]\\nA --> C[SysTick]\\nA --> D[Debug ITM]'
      },
      {
        id: 'm2',
        title: 'Clock Configuration',
        completed: false,
        content: 'The clock system is the heart of any MCU. Understanding HSI, HSE, PLL, and clock trees is essential for proper peripheral timing.',
        codeExamples: [
          'RCC->CR |= RCC_CR_HSEON; // Enable HSE\\nwhile(!(RCC->CR & RCC_CR_HSERDY)); // Wait'
        ],
        diagram: 'graph LR\\nHSE --> PLL --> SYSCLK --> AHB --> APB1\\nHSE --> SYSCLK --> AHB --> APB2'
      },
      {
        id: 'm3',
        title: 'GPIO Programming',
        completed: false,
        content: 'GPIO (General Purpose Input/Output) is the most fundamental peripheral. Configuring pins as inputs, outputs, or alternate functions is a core skill.',
        codeExamples: [
          'GPIOA->MODER |= (1 << 5); // Set PA5 as output\\nGPIOA->ODR |= (1 << 5); // Set pin high'
        ],
        diagram: 'graph TD\\nA[GPIO Port] --> B[MODER]\\nA --> C[OSPEEDR]\\nA --> D[ODR]\\nA --> E[AFR]'
      }
    ]
  },
  {
    id: 'linux-basics',
    title: 'Linux Systems & Shell',
    description: 'Linux fundamentals, terminal navigation, and shell scripting for embedded development.',
    icon: 'Terminal',
    duration: '2 Weeks',
    level: 'Beginner',
    topics: [
      {
        id: 'l1',
        title: 'Linux Filesystem',
        completed: false,
        content: 'Understanding the Linux directory structure, file permissions, and common commands is essential for embedded Linux development.',
        codeExamples: [
          '# List files with permissions\\nls -la /home/user\\n# Change directory\\ncd /etc'
        ],
        diagram: 'graph TD\\n/ --> home\\n/ --> etc\\n/ --> dev\\n/ --> proc'
      },
      {
        id: 'l2',
        title: 'Shell Scripting Basics',
        completed: false,
        content: 'Shell scripts automate repetitive tasks in embedded development workflows such as building, flashing, and testing.',
        codeExamples: [
          '#!/bin/bash\\nfor file in *.c; do\\n    gcc -o ${file%.c} $file\\ndone'
        ],
        diagram: 'graph TD\\nA[Script] --> B[Loop]\\nB --> C[Compile]\\nB --> D[Link]'
      }
    ]
  },
  {
    id: 'rtos',
    title: 'Real-Time Operating Systems',
    description: 'RTOS concepts, task management, synchronization, and scheduling for embedded applications.',
    icon: 'Clock',
    duration: '5 Weeks',
    level: 'Advanced',
    topics: [
      {
        id: 'r1',
        title: 'RTOS Fundamentals',
        completed: false,
        content: 'A Real-Time Operating System provides multitasking capabilities with deterministic timing. Tasks are the basic unit of execution.',
        codeExamples: [
          '// Creating a task in FreeRTOS\\nxTaskCreate(vTaskFunction, \"Task1\", 128, NULL, 1, NULL);'
        ],
        diagram: 'graph TD\\nA[RTOS Kernel] --> B[Task 1]\\nA --> C[Task 2]\\nA --> D[Task 3]\\nA --> E[Scheduler]'
      },
      {
        id: 'r2',
        title: 'Synchronization Primitives',
        completed: false,
        content: 'Semaphores, mutexes, and queues are used to coordinate access to shared resources and communicate between tasks.',
        codeExamples: [
          '// Binary semaphore for resource access\\nxSemaphoreGive(binary_sem);\\nxSemaphoreTake(binary_sem, portMAX_DELAY);'
        ],
        diagram: 'graph TD\\nA[Task 1] --> B[Semaphore]\\nA --> C[Shared Resource]\\nD[Task 2] --> B'
      },
      {
        id: 'r3',
        title: 'Interrupt Handling in RTOS',
        completed: false,
        content: 'Interrupt Service Routines (ISRs) in RTOS environments must be short and defer work to tasks using queues or semaphores.',
        codeExamples: [
          '// ISR posting to queue\\nvoid EXTI_IRQHandler() {\\n    BaseType_t xHigherPriorityTaskWoken = pdFALSE;\\n    xQueueSendFromISR(xQueue, &data, &xHigherPriorityTaskWoken);\\n}'
        ],
        diagram: 'graph TD\\nA[Interrupt] --> B[ISR]\\nB --> C[Queue]\\nC --> D[Task]'
      }
    ]
  },
  {
    id: 'peripherals',
    title: 'Communication Protocols',
    description: 'Mastering UART, SPI, I2C, and other communication protocols for embedded systems.',
    icon: 'Database',
    duration: '3 Weeks',
    level: 'Intermediate',
    topics: [
      {
        id: 'p1',
        title: 'UART Communication',
        completed: false,
        content: 'UART (Universal Asynchronous Receiver/Transmitter) is one of the most common serial communication protocols in embedded systems.',
        codeExamples: [
          '// UART initialization\\nUSART2->BRR = 0x683; // 115200 baud\\nUSART2->CR1 |= USART_CR1_TE | USART_CR1_RE;'
        ],
        diagram: 'graph TD\\nA[UART TX] --> B[Receiver]\\nC[UART RX] --> D[Transmitter]'
      },
      {
        id: 'p2',
        title: 'SPI Protocol',
        completed: false,
        content: 'SPI (Serial Peripheral Interface) provides full-duplex communication with a master-slave architecture using MOSI, MISO, SCK, and SS lines.',
        codeExamples: [
          '// SPI transmission\\nSPI1->DR = data;\\nwhile(!(SPI1->SR & SPI_SR_TXE));'
        ],
        diagram: 'graph TD\\nA[Master] --> B[MOSI]\\nA --> C[MISO]\\nA --> D[SCK]\\nA --> E[SS]'
      }
    ]
  },
  {
    id: 'drivers',
    title: 'Device Drivers & HAL',
    description: 'Building hardware abstraction layers and device drivers for embedded peripherals.',
    icon: 'HardDrive',
    duration: '4 Weeks',
    level: 'Intermediate',
    topics: [
      {
        id: 'd1',
        title: 'HAL Architecture',
        completed: false,
        content: 'The Hardware Abstraction Layer (HAL) provides a standardized interface to hardware peripherals, making code portable across different MCU families.',
        codeExamples: [
          '// HAL GPIO init\\nHAL_GPIO_Init(GPIOA, &gpio_InitStruct);\\nHAL_Delay(100);'
        ],
        diagram: 'graph TD\\nA[Application] --> B[HAL Layer]\\nB --> C[LL Driver]\\nC --> D[Hardware Register]'
      },
      {
        id: 'd2',
        title: 'Driver Development Patterns',
        completed: false,
        content: 'Good driver design follows patterns like initialization, configuration, start/stop, and interrupt handling callbacks.',
        codeExamples: [
          '// Driver init pattern\\nint my_driver_init(void) {\\n    if (register_base == NULL) return -1;\\n    // Configure registers\\n    return 0;\\n}'
        ],
        diagram: 'graph TD\\nA[Init] --> B[Configure]\\nB --> C[Start]\\nC --> D[Interrupt Handler]'
      }
    ]
  }
];