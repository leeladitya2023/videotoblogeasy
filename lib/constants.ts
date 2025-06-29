export const plansMap = [
  {
    id: "free",
    name: "Free",
    description: "Get started for free!",
    price: "0",
    items: ["10 Transcriptions per day", "Basic Blog Posts"],
    paymentLink: "#",
    priceId: "",
  },
  {
    id: "basic",
    name: "Basic",
    description: "Get started with VideoToBlog!",
    price: "10",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_aEU9D35X65fH0MMeUW",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PtLVqBPnsISnc82CW4au1uq"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let's go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_cN26qRclufUl9jibIL",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PtLVqBPnsISnc82bspCVu5e"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://videotoblog.vercel.app";
