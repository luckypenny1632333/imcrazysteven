import danteai from "/public/image/danteai.png";
import aivio from "/public/image/aivio.png";
import hmesh from "/public/image/hmesh.png";
import ironwill from "/public/image/ironwill.png";
import RangoExchange from "/public/image/rango-exchange.png";
import foodzone from "/public/image/foodzone.png";
import NYWNFT from "/public/image/nyw-nft.png"
import SolanaWalletTracking from "/public/image/Solana-Wallet-Tracking-Bot.gif";
import EVMWalletTracking from "/public/image/EVM-Wallet-Tracking-Bot.gif";
import EVMTokenAnalysis from "/public/image/EVM-Token-Analysis-Bot.gif";

export const projectsData = [
  {
    id: 1,
    name: "IRONWILL",
    description: "ERC20 FICCO token presale on Ethereum blockchain.",
    tools: [
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Ethersjs",
      "Wagmi",
      "Rainbow Kit",
      "Solidity",
      "Hardhat",
    ],
    role: "Technical Co-founder",
    code: "",
    demo: "https://www.ironwill.io/",
    image: ironwill,
  },
  {
    id: 2,
    name: "RangoExchange",
    description: "DEX platform for crypto trading on Ethereum blockchain.",
    tools: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "Web3.js",
      "Solidity",
      "Hardhat",
      "Openzeppelin",
      "IPFS",
    ],
    code: "",
    role: "Lead Smart Contract Developer",
    demo: "https://rango.exchange/",
    image: RangoExchange,
  },
  {
    id: 3,
    name: "Hydrameshnet",
    description:
      "A ERC20 token presale platform and cross-chain bridge between Arbitrum One and ARK V3 forked Custom blockchain called HMESH",
    tools: [
      "Solidity",
      "Hardhat",
      "Ethersjs",
      "Typescript",
      "Openzeppelin",
      "ARK SDK",
      "PostgreSQL",
    ],
    code: "",
    demo: "https://hydramesh.net",
    image: hmesh,
    role: "Blockchain Developer",
  },
  ,
  {
    id: 4,
    name: "NYW NFT Marketplace",
    description: "NFT marketplace on Ethereum blockchain.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "Nodejs",
      "ExpressJS",
      "SubGraph",
      "GraphQL",
      "Ethers.js",
      "Wagmi",
      "Solidity",
      "Hardhat",
    ],
    role: "Senior Blockchain Developer",
    code: "",
    demo: "https://www.minato-yellowflash.com/",
    image: NYWNFT,
  },
  {
    id: 5,
    name: "EVM Wallet Tracking Bot",
    description:
      "EVM Wallet Tracking Bot is a tool that allows users to track wallet details on the Ethereum, BSC, Base blockchain.",
    tools: ["Python", "Web3.py", "Python-telegram-bot", "MongoDB", "Moralis"],
    code: "",
    demo: "https://t.me/evm_wallet_tracking_telegram_bot",
    image: EVMWalletTracking,
    role: "Full Stack Developer",
  },
  {
    id: 6,
    name: "Solana Wallet Tracking Bot",
    description:
      "Solana Wallet Tracking Bot is a tool that allows users to track wallet details on the Solana blockchain.",
    tools: [
      "Node.js",
      "Solana/Web3.js",
      "Node-telegram-bot-api",
      "Metaplex",
      "MongoDB",
    ],
    code: "",
    demo: "https://t.me/sol_wallet_tracking_telegram_bot",
    image: SolanaWalletTracking,
    role: "Full Stack Developer",
  },
  {
    id: 7,
    name: "EVM Token Analysis Bot",
    description:
      "EVM Token Analysis Bot is a tool that allows users to analyze token details on the Ethereum, BSC, Base blockchain.",
    tools: [
      "Python",
      "Web3.py",
      "Python-telegram-bot",
      "MongoDB",
      "Moralis",
      "Zenrows",
      "Dune query",
    ],
    code: "",
    demo: "https://t.me/evm_token_analysis_telegram_bot",
    image: EVMTokenAnalysis,
    role: "Full Stack Developer",
  },
  {
    id: 8,
    name: "Food Zone",
    description: "Food Delivery Website",
    tools: ["React.js", "Node.js", "ExpressJS", "MongoDB", "TailwindCSS"],
    code: "",
    demo: "https://foodzonenewapp.netlify.app/",
    image: foodzone,
    role: "Full Stack Developer",
  },
  {
    id: 9,
    name: "AIVIO",
    description: "AI Email Marketing Saas platform",
    tools: ["Next.js", "OpenAI", "FastAPI", "Langchain", "Pinecone"],
    code: "",
    demo: "https://aivio.mintlify.app",
    image: aivio,
    role: "AI Engineer",
  },
  {
    id: 10,
    name: "Dante AI",
    description: "Free AI Agents for Website",
    tools: ["Next.js", "OpenAI", "FastAPI", "Langchain", "Pinecone"],
    code: "",
    demo: "https://dante-ai.com",
    image: danteai,
    role: "AI Engineer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
