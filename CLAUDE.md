# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript project that models various real-world concepts (humans, animals, plants, zombies, sports, music) using object-oriented programming principles. Each domain is organized into its own directory with abstract base classes and concrete implementations.

## Runtime & Tools

- **Runtime**: Bun (use `bun` commands, not `node` or `npm`)
- **TypeScript**: Uses `@tsconfig/strictest` for maximum type safety
- **Linting**: ESLint with TypeScript support

## Common Commands

```bash
# Type checking
bun run typecheck

# Linting (with auto-fix)
bun run lint

# Run domain models interactively
bun run model-human
bun run model-animal
bun run model-plant
bun run model-zombie
bun run model-sport
bun run model-music
```

## Architecture

The codebase follows a domain-driven structure where each domain (human, animal, plant, zombie, sport, music, shapes) has:

1. **Abstract base class**: Defines common properties and abstract methods
   - Example: `Human`, `Animal`, `Music`, `Sport`, `Zombie`, `Plant`

2. **Concrete implementations**: Extend base classes with specific behavior
   - Example: `Man` and `Woman` extend `Human`
   - Example: `Cat`, `Dog`, `Giraffe`, `Cheetah` extend `Animal`

3. **interact.ts**: Entry point that demonstrates usage of the domain models

### Key Patterns

- **Factory pattern**: Classes use static `create()` methods instead of public constructors
- **Encapsulation**: Private fields with getters, abstract methods for behavior
- **Shared enums**: `Sex` enum from `human/` is reused in `animal/` domain
- **Console output**: Models use `printDetails()` and `console.table()` for formatted output

### Directory Structure

```
src/
├── human/       # Human models (Man, Woman) with names and sex
├── animal/      # Animal models with physical attributes
├── plant/       # Plant models with photosynthesis behavior
├── zombie/      # Zombie models with region and sleep patterns
├── sport/       # Sport models (Basketball, Football, Tennis)
├── music/       # Music models by genre (Classical, Hiphop, ChildrensMusic)
└── shapes/      # Geometric shapes (currently minimal)
```

## Development Notes

- The project uses Bun as the runtime, so always use `bun` or `bunx` commands
- TypeScript strict mode is enabled via `@tsconfig/strictest`
- When adding new models, follow the existing pattern: abstract base class with concrete implementations and an interact.ts for demonstration
