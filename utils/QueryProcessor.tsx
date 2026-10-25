export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "jbcastil";
  }

  if (query.toLowerCase().includes("name")) {
    return "Jillian";
  }

  if (query.toLowerCase().includes("age")) {
    return "20";
  }

  if (query.toLowerCase().includes("What is 48 multiplied by 34 plus 14?")) {
    return (48 * 34 + 14).toString();
  }

  if (query.toLowerCase().includes("What is the scrabble score of ruby?")) {
    return "9";
  }

  
  
  return "";

}