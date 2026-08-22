import { Card, IconChevron, PageHeader, Pill, SectionHeading, TodoBadge } from '@/components/ui';
import { interests, languages, skillGroups } from '@/data/skills';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import type { SkillGroup } from '@/data/types';

/**
 * Groupe rabattable base sur <details>/<summary> natifs :
 * accessible au clavier et aux lecteurs d'ecran sans une ligne de JavaScript,
 * et fonctionnel meme si le JS ne charge pas.
 */
function SkillCategory({ group }: { group: SkillGroup }) {
  return (
    <details
      open={group.defaultOpen}
      className="group border-b border-line last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 transition-colors hover:text-accent focus-visible:text-accent">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-ink">{group.title}</h3>
            {group.isPlaceholder && <TodoBadge />}
          </div>
          <p className="mt-0.5 text-sm text-ink-muted">{group.caption}</p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-meta text-ink-faint">
            {String(group.items.length).padStart(2, '0')}
          </span>
          <IconChevron className="h-4 w-4 text-ink-faint transition-transform duration-200 group-open:rotate-180" />
        </div>
      </summary>

      <ul className="flex flex-wrap gap-2 pb-5">
        {group.items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </ul>
    </details>
  );
}

export default function Skills() {
  useDocumentMeta(
    'Skills — Nabil Elkorchi',
    'Structural software, survey instrumentation, reality capture, project delivery, and engineering coursework.',
  );

  return (
    <div className="shell py-8 sm:py-12">
      <PageHeader
        eyebrow="Capabilities"
        title="Skills"
        intro="Grouped by what they are used for, rather than rated on a scale. Expand a category to see the full list."
      />

      <div className="space-y-5 sm:space-y-6">
        <Card>
          <SectionHeading eyebrow="Technical" title="Tools & methods" />
          <div className="-mt-2">
            {skillGroups.map((group) => (
              <SkillCategory key={group.id} group={group} />
            ))}
          </div>
        </Card>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <Card delay={40}>
            <SectionHeading eyebrow="Languages" title="Spoken languages" />
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.language}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-medium text-ink">{lang.language}</span>
                  <span className="text-right text-sm text-ink-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card delay={60}>
            <SectionHeading eyebrow="Outside work" title="Interests" />
            <ul className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Pill key={interest}>{interest}</Pill>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
