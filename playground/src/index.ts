import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");

const token = encoding.encode("This sentence is the test to tiktoken library");

console.log(token);
