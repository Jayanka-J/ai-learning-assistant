# Design: DeepDive AI Learning Assistant

## System Architecture.
The system uses a **RAG-based (Retrieval-Augmented Generation)** architecture to inject local codebase context into LLM prompts.



## Architecture diagram of the proposed solution:

```mermaid
graph LR
    A[User Interface] --> B[AI Logic Layer]
    B --> C[Vector Database]
    B --> D[LLM Engine]
    C --> B
    D --> B



## Tech Stack.
* **Frontend.** [React](https://react.dev) with [Tailwind CSS](https://tailwindcss.com) for a clean, distraction-free reading interface.
* **Backend.** [Node.js](https://nodejs.org) (Fastify) for handling streaming LLM responses.
* **LLM Engine.** [OpenAI GPT-4o-mini](https://openai.com) for fast explanations.
* **Vector Store.** [ChromaDB](https://www.trychroma.com) to index local project documentation for better context.

## Data Model.
* `ProjectContext`: Stores metadata and file paths for the codebase being analyzed.
* `LearningSession`: Tracks user progress and frequently asked questions to personalize future explanations.

## Component Diagram.
```mermaid
graph TD
    User -->|Highlights Code| Frontend
    Frontend -->|Query| Backend
    Backend -->|Context Retrieval| VectorStore
    VectorStore -->|Relevant Docs| Backend
    Backend -->|Augmented Prompt| LLM
    LLM -->|Streamed Explanation| Frontend
