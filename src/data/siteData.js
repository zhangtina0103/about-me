export const profile = {
  name: 'Kristina Zhang',
  email: 'zhangktyi@gmail.com',
  phone: '(516) 667-8385',
  location: 'Syosset, Long Island, NY',
  github: 'https://github.com/zhangtina0103',
  scholar: 'https://scholar.google.com/citations?user=oX4ZQIQAAAAJ&hl=en',
  photo: '/profile.png',
  year: 'Senior',
  classYear: '2027',
  major: 'Artificial Intelligence & Mathematics (Courses 6-4 & 18)',
  tagline: 'Machine Learning Research · Systems Performance · Computational Biology',
  bio: `I'm a senior at MIT studying Artificial Intelligence & Mathematics (Courses 6-4 & 18), with a minor in French and a planned MEng in AI (2027–2028). I work on LLM alignment, computational biology, and large-scale ML infrastructure. I am especially interested in the intersection of machine learning research and production-grade systems — from distributed training and inference to rigorous experimentation.`,
  futureCoursework:
    'Distributed Systems Engineering, Hardware Architecture for Deep Learning, Stochastic Processes, Dynamical Systems and Controls',
};

export const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'highlights', label: 'Awards' },
];

export const education = {
  mit: {
    school: 'Massachusetts Institute of Technology (MIT)',
    location: 'Cambridge, MA',
    dates: '2023 – 2027',
    degrees: [
      { title: 'Master of Engineering in Artificial Intelligence', dates: '2027 – 2028' },
      {
        title: 'Bachelor of Engineering in Artificial Intelligence & Mathematics (Courses 6-4 & 18)',
        dates: '2023 – 2027',
        details: ['GPA: 4.94 / 5.00', 'Minor in French'],
      },
    ],
    honors: [
      'MIT Social and Ethical Responsibility of Computing (SERC) Fellow, 2026',
      'Burchard Scholar, 2026',
    ],
    coursework:
      'Deep Learning, Natural Language Processing, Machine Learning, Operating Systems, Computation Structures, Efficient Computing & TinyML, Statistics, Stochastic Processes, Inference & Reasoning, Optimization Methods, Robotics: Science and Systems, Linear Algebra, Numerical Methods, Algorithms, Probability, C & Assembly, Computational Biology, Fundamentals of Programming, Computational Thinking & Data Science, Discrete Mathematics, Differential Equations',
    teaching: [
      '6.S095 Probability Problem Solving — Instructor · January – February 2026',
      '6.3700 Probability & Statistics — Teaching Assistant · September – December 2026',
      '6.C01 Modeling with Machine Learning — Lab Assistant · February – May 2026',
      '6.C06 Linear Algebra & Optimization — Grader · September – December 2025',
      '7.01x Introductory Biology — Tutor · September – December 2023',
    ],
  },
  highSchool: {
    school: 'Syosset Senior High School',
    location: 'Syosset, NY',
    dates: '2019 – 2023',
    details: ['GPA (Weighted): 100.00 / 100', 'SAT: 1580 (Math 800, EBRW 780)'],
  },
};

export const highlights = {
  awards: [
    'MIT Pokerbots — Most Improved Award ($750) · January – February 2026',
    'MIT 6.1040 web.lab — 4th place among 372 teams ($1,500) · January – February 2025',
    'Regeneron Science Talent Search Scholar (2023) — top 300 nationally',
    'Junior Science and Humanities Symposium Semi-Finalist (2023)',
    'Published book "Seesaw" — United Culture Press (2022)',
    'Le Grand Concours (French National Exam) — Gold Medal (2019), Silver Medal (2020)',
    'Japanese National Exam Level 3 — Honorable Mention (2022)',
  ],
  fencing: {
    college: [
      'NCAA Division III Northeast All-Conference (Women\'s Épée)',
      'USFCA All-Academic Honors',
    ],
    precollege: [
      'National "A" rated épée fencer (New York Fencing Academy); 8 years competitive experience',
      '12th on Cadet Women\'s Épée (U17) national rolling points list; Cadet World Cup qualifier',
      '51st on Junior Women\'s Épée (U20) national rolling points list',
      'National circuit (NACs, Junior Olympics, Nationals): 2× top 8, 3× top 16, 2× top 32 in Cadet/Junior Women\'s Épée',
      'Regional circuit (RJCC/ROC): 27 total podium finishes — 2× gold, 4× silver, 9× bronze, 12× top 8',
    ],
  },
};

export const publications = [
  {
    title: 'Out-of-Distribution Generalization of Risk Aversion in Language Models',
    authors: 'K. Zhang, J.C. Okoroafor, B. Maltbie, A. Lin, A. Bokka, E. Thornley',
    venue:
      'ICML 2026 Second Workshop on Agents in the Wild: Safety, Security, and Beyond (AIWILD)',
    year: '2026',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oX4ZQIQAAAAJ&citation_for_view=oX4ZQIQAAAAJ:u-x6o8ySG0sC',
  },
  {
    title:
      'Effects of Engagement with Different Authentic Audiovisual Stimuli on the Listening Proficiency of Higher-level and General Second Language (L2) Learners',
    authors: 'T.T. Zhang',
    venue: 'Scholarly Review Journal',
    year: '2023',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oX4ZQIQAAAAJ&citation_for_view=oX4ZQIQAAAAJ:u5HHmVD_uO8C',
  },
];

export const research = [
  {
    title: 'SERC Fellow',
    org: 'MIT Schwarzman College of Computing',
    dates: 'September 2025 – May 2026',
    pi: 'Elliott Thornley',
    bullets: [
      'Built a benchmark to evaluate OOD generalization of learned risk aversion across extreme scale variations (10⁹⁸ range in stakes); paper accepted to ICML 2026 AIWILD Workshop and submitted to NeurIPS.',
      'Utilized Slurm workload manager to orchestrate distributed compute resources for multi-node preference fine-tuning (DPO) of Qwen, LLaMA, and Gemma models, boosting extreme-stakes risk metrics by 50+%.',
    ],
    repo: 'https://github.com/zhangtina0103/risk-averse-LLMs',
  },
  {
    title: 'Research Assistant',
    org: 'MIT Computer Science & AI Laboratory',
    dates: 'June 2026 – Present',
    pi: 'Bonnie Berger',
    bullets: [
      'Developing sparse autoencoder methods to extract interpretable features from protein language model activations.',
      'Probing learned latent representations for biologically meaningful sequence and structural patterns.',
    ],
  },
  {
    title: 'Research Assistant',
    org: 'MIT Varanasi Research Group',
    dates: 'February 2026 – Present',
    pi: 'Kripa Varanasi',
    bullets: [
      'Optimizing generative flow matching models for virtual staining across multimodal pathology datasets, benchmarking performance against baseline U-Net, GAN, and diffusion architectures.',
      'Designing a dual-branch neural network architecture to simultaneously predict three distinct biological markers from a single input modality.',
    ],
    repo: 'https://github.com/zhangtina0103/Pix2pix_DualBranch',
  },
  {
    title: 'Research Assistant',
    org: 'MIT Sloan School of Management',
    dates: 'September 2024 – May 2025',
    bullets: [
      'Examined the macroeconomic effects of automation and AI adoption on the U.S. labor force by modeling relationships between technology exposure, employment trends, and GDP per capita.',
      'Built data pipelines with pandas and BEA/BLS APIs, mapped SOC codes with O*NET crosswalks, and developed visualization tools to inform research on the future of work and economic resilience.',
    ],
    repo: 'https://github.com/zhangtina0103/ai-and-labor-force',
  },
];

export const workExperience = [
  {
    title: 'ML Infrastructure Engineer Intern',
    org: 'Amazon AGI Team',
    dates: 'June – August 2026',
    bullets: [
      'Built agentic cluster telemetry pipelines with Prometheus and Grafana to isolate underlying hardware faults from software and configuration bugs.',
      'Utilized sampling profilers (py-spy) and network diagnostics to analyze CPU blocking and NCCL communication overhead to minimize synchronization stalls across massively distributed training nodes.',
      'Developed automated log-parsing scripts to track system-level failure correlations and diagnostic test regressions, assisting in the calculation of cluster reliability metrics (MTBF, MTBI).',
    ],
  },
  {
    title: 'NLP Intern',
    org: 'Lenovo',
    dates: 'June – August 2025',
    bullets: [
      'Fine-tuned Qwen2.5-3B using supervised fine-tuning and GRPO reinforcement learning for multi-turn function-calling in LLM agent settings.',
      'Worked with high-performance LLM frameworks such as vLLM execution paths, FlashAttention optimizations, and precision quantization techniques to analyze model inference throughput.',
      'Evaluated structured tool-use performance on xLAM and ToolACE datasets, improving Berkeley Function Calling Leaderboard accuracy by 3% over baseline.',
    ],
  },
  {
    title: 'Computer Vision Developer',
    org: 'MIT Code For Good — Global Smile Foundation',
    dates: 'February – May 2025',
    bullets: [
      'Trained multitask deep learning model (INCLG) for facial marking overlay generation and surgical image inpainting.',
      'Applied model to simulate pre-/post-operative cleft lip surgery outcomes for clinical planning in underserved regions.',
      'Achieved mean PSNR 32.5 dB, SSIM 0.97, and MAE 0.004 across 84 patient evaluation images on held-out surgical overlay benchmarks.',
    ],
    repo: 'https://github.com/zhangtina0103/cfgGlobalSmile',
  },
  {
    title: 'Data Science Intern',
    org: 'Citizens for Juvenile Justice',
    dates: 'January – May 2025',
    bullets: [
      'Built R pipelines to wrangle and join longitudinal Massachusetts child welfare administrative records; modeled placement stability and permanency outcomes with cohort analysis and regression.',
      'Ran hypothesis tests and produced reproducible dashboards and summary statistics for evidence-based policy advocacy on foster care system performance.',
    ],
    repo: 'https://github.com/zhangtina0103/data-science-cfjj',
  },
];

export const projects = [
  {
    title: 'Poker Bot',
    tech: 'Python · C++',
    award: 'MIT Pokerbots — Most Improved Award ($750) · January – February 2026',
    description:
      'GTO-inspired betting via Monte Carlo equity simulation over 10⁶+ hand samples; modeled opponent tendencies as latent variables.',
    repo: 'https://github.com/zhangtina0103/mit-poker-bots',
  },
  {
    title: 'GPU Kernel Optimization',
    tech: 'CUDA · Triton',
    description:
      'Implemented CUDA/Triton matmul and FlashAttention kernels from scratch. Benchmarked against cuBLAS achieving 38% of T4 FP32 peak (3094 GFLOPS) with 1355 GFLOPS Triton vs 480 GFLOPS tiled CUDA.',
    repo: 'https://github.com/zhangtina0103/kernel-optimization',
  },
  {
    title: 'ML Inference Engine',
    tech: 'vLLM · FastAPI · Python',
    description:
      'Served DPO fine-tuned LLaMA 3.1 8B via vLLM and FastAPI on L40S GPU (42 tok/s). Implemented PagedKV cache and continuous batching from scratch with Prometheus monitoring.',
    repo: 'https://github.com/zhangtina0103/inference-server',
  },
  {
    title: 'Distributed Training',
    tech: 'PyTorch · NCCL · CUDA',
    description:
      'Implemented DDP from scratch with custom AllReduce gradient synchronization via NCCL. Trained CNN across two L40S GPUs with DistributedSampler.',
    repo: 'https://github.com/zhangtina0103/mnist-ddp',
  },
  {
    title: 'Naruto Shippuden Database',
    tech: 'C++17 · SQLite3',
    description:
      'Database application for ninja and jutsu data with BST-based stat ranking, quicksort, multithreaded battle simulation, and CSV import/export via SQLite junction tables.',
    repo: 'https://github.com/zhangtina0103/naruto-shippuden-database',
  },
  {
    title: 'NBA Schedule Optimizer',
    tech: 'Julia · JuMP · Gurobi',
    description: 'MILP minimizing travel distance while maximizing schedule fairness across constraint variations.',
    repo: 'https://github.com/zhangtina0103/nba-optimization-schedule',
  },
  {
    title: 'Antibody Design via Protein Language Models',
    tech: 'Python · PyTorch · ESM-2 · RFdiffusion',
    description:
      'Fine-tuned on 15,000+ antibody records to predict developability and benchmark HER2-targeting candidates via RMSD/ipTM.',
    repo: 'https://github.com/zhangtina0103/antibody-diffusion',
  },
  {
    title: 'BattleLingo — Foreign Language Learning Game',
    tech: 'MongoDB · Express · React · Node.js · Socket.io',
    award: 'MIT 6.1040 web.lab — 4th place among 372 teams ($1,500) · January – February 2025',
    description:
      'Live multiplayer foreign-language learning game (16 languages) built for MIT 6.1040 web.lab.',
    repo: 'https://github.com/zhangtina0103/battleLingo',
  },
];

export const skills = [
  {
    category: 'Machine Learning',
    items: [
      'PyTorch, HuggingFace, scikit-learn',
      'DPO / GRPO, generative flow matching, diffusion models',
      'LLM fine-tuning & evaluation (BFCL, preference learning)',
      'ESM-2, RFdiffusion, sparse autoencoders',
      'NumPy, pandas, matplotlib',
    ],
  },
  {
    category: 'Systems & Infrastructure',
    items: [
      'Distributed training: NCCL, multi-node GPU clusters, Slurm workload manager',
      'Observability: Prometheus, Grafana, py-spy sampling profiler',
      'Containers & orchestration: Docker, Kubernetes',
      'Inference serving: vLLM, FlashAttention, FP8/INT8 quantization',
      'Cloud & Linux: AWS CDK, Bash, network profiling for collective communication',
      'Profiling & debugging: strace, perf, log-parsing pipelines',
    ],
  },
  {
    category: 'Robotics',
    items: [
      'ROS 2, RViz',
      'SLAM, state estimation, occupancy grid mapping',
      'LiDAR perception, sensor fusion',
      'Path planning, autonomous navigation',
      'Computer vision (segmentation, homography)',
    ],
  },
  {
    category: 'Software',
    items: ['Python', 'C/C++', 'SQL', 'Julia', 'OCaml', 'R', 'JavaScript', 'React', 'Assembly', 'Git', 'LaTeX'],
  },
  {
    category: 'Languages',
    items: ['English (native)', 'Mandarin (fluent)', 'French (proficient)', 'Japanese (intermediate)'],
  },
];

export const activities = {
  mit: [
    {
      title: 'Executive Editor',
      org: 'MIT Science Policy Review',
      dates: 'September 2023 – Present',
      bullets: [
        'Manage multiple editorial teams through the full publication cycle, from pitch and drafting through peer review, revision, and final release.',
      ],
    },
  ],
};
