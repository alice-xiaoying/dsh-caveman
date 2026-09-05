/**
 * dsh-caveman — Caveman skill plugin for DeepSeek Harness.
 * Simply registers the skills directory; no runtime code needed.
 */

export function apply(ctx) {
  // No-op: skill files are discovered automatically from ./skills/
  return () => {}; // no-op dispose
}
