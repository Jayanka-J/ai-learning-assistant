# Requirements: DeepDive AI Learning Assistant

## Vision Statement. 
To accelerate technical mastery by providing "just-in-time" explanations for complex codebases and concepts through an interactive AI tutor.

## Target Audience.
* Junior developers and students transitioning into tech.
* Engineers exploring unfamiliar frameworks or legacy codebases.

## Functional Requirements.
* **Code Contextualization.** When a user highlights a code snippet, the system shall provide a multi-level explanation (High-level logic vs. Line-by-line).
* **Concept Mapping.** The system shall generate a visual graph (Mermaid) of how a specific file relates to the broader architecture.
* **Active Recall Quizzing.** After an explanation, the assistant shall optionally generate a "check for understanding" question.
* **Documentation Synthesis.** The tool shall summarize long README files into actionable "Getting Started" steps.

## Non-Functional Requirements.
* **Latency.** AI responses for code explanations must begin streaming within 2 seconds.
* **Privacy.** User code snippets must be processed in a stateless manner and not used for model training.
