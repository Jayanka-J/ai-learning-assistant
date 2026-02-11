## Architecture diagram of the proposed solution:

```mermaid
graph LR
    A[User Interface] --> B[AI Logic Layer]
    B --> C[Vector Database]
    B --> D[LLM Engine]
    C --> B
    D --> B
