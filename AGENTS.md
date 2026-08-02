\# IT Learning Portal - AGENTS.md



\# Project Overview



This project is a Japanese internal IT learning portal built with VitePress.



It is designed for:



\- New IT staff

\- Help Desk engineers

\- Corporate IT administrators

\- Internal training



This project is NOT:



\- a marketing website

\- an online course

\- a personal blog

\- a technical encyclopedia



The purpose is to help employees quickly understand enterprise IT technologies used in daily work.



\---



\# Language



Always write in natural Japanese.



Avoid unnecessary English.



Examples:



Good:

財務部門



Bad:

Finance Group



Good:

コンピューターアカウント



Bad:

Computer Object



Use terminology commonly used inside Japanese companies.



\---



\# Writing Style



Always explain:



1\. Why

2\. When

3\. How



Do not immediately start explaining procedures.



Readers should understand the reason before the operation.



Avoid long paragraphs.



Prefer:



\- cards

\- diagrams

\- tables

\- callouts

\- flow charts



\---



\# Standard Article Structure



Every technology article should follow this order whenever applicable.



1\. Why it is important



2\. Typical scenarios



3\. How it works



4\. Administrator's perspective



5\. Current position (2026)



6\. Common issues



7\. Key points



\---



\# UI Style



Target:



Microsoft Learn



Keywords:



\- clean

\- calm

\- spacious

\- enterprise

\- documentation



Avoid:



\- flashy

\- colorful

\- marketing

\- SaaS landing page

\- excessive animation



\---



\# Layout



Prefer:



large margins



consistent spacing



simple typography



comfortable reading



Navigation cards should never overflow.



Avoid text clipping.



Avoid forcing ellipsis.



\---



\# CSS Rules



Always inspect existing CSS before writing new CSS.



Never continue adding:



review-final



review-final-v2



review-final-v3



...



Instead:



Remove obsolete rules.



Merge duplicated rules.



Refactor conflicting CSS.



Prefer improving existing styles over overriding them.



\---



\# Development Workflow



Before editing:



1\. Read related files.



2\. Explain the implementation plan.



3\. Wait for confirmation before making large changes.



After editing:



1\. Run:



npm run docs:dev



2\. Verify the browser rendering.



3\. Fix any layout issues if found.



4\. Show the modified files.



5\. Show the diff summary.



Never declare completion without checking the result.



\---



\# Scope Control



Only modify files related to the requested task.



Do not refactor unrelated files.



Do not redesign other pages unless explicitly requested.



\---



\# Images



Do not generate mockup images unless explicitly requested.



Modify the actual project files.



\---



\# VitePress



Reuse existing components whenever possible.



Keep article styles consistent.



Avoid introducing unnecessary dependencies.



\---



\# Design Philosophy



Users should feel like they are reading Microsoft's official documentation.



Every page should answer:



Why does this exist?



When is it used?



How does it work?



Why should an administrator care?



\---



\# Code Quality



Prefer readability over clever code.



Prefer maintainability over shortcuts.



Do not introduce technical debt.



Always keep the project consistent.



\---



\# Communication



When making changes:



Explain your reasoning.



State which files will be modified.



If uncertain, ask before changing.



Do not guess.



\# Project Owner Preferences



The project owner prefers:



\- Calm enterprise UI

\- Microsoft Learn style

\- Japanese explanations suitable for corporate training

\- Minimal English

\- Consistent page layouts

\- High readability

\- Practical administrator perspective



When multiple implementation choices exist,



prefer the one that improves long-term maintainability.



Do not optimize only for visual appearance.



Prioritize usability.

