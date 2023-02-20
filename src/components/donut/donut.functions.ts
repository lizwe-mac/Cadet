import { skillScoreRounding, percentageDifference } from '../helpers';
import { DonutSlideCommandedProperties } from './donut.models';

function arrow(className: string): string {
  const color = className === 'up' ? 'var(--apple)' : 'var(--berry)';
  return `<svg class="${className} arrow" fill="none" viewBox="0 0 13 14"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.9551 7.75 6.95508 13l-5-5.25m5-6.75v12V1Z"/></svg>`;
}

function addSpan(text: string, to: HTMLDivElement, className?: string, html?: string): void {
  const label = document.createElement('span');
  const textNode = document.createTextNode(text);

  if (className) label.className = className;

  label.appendChild(textNode);

  if (!!html) label.innerHTML += html;
  to.appendChild(label);
}

export function handleMouseEnter(event: React.MouseEvent<SVGPathElement, MouseEvent>, slice: DonutSlideCommandedProperties): void {
  const { clientX, clientY } = event;
  const target = event.currentTarget;
  const svg = target.parentElement;

  const rect = svg?.getBoundingClientRect();

  if (rect) {
    const flyout = document.createElement('div');
    flyout.className = 'donut-flyout';

    flyout.style.left = `${clientX - 15}px`;
    flyout.style.top = `${clientY - 15}px`;
    flyout.style.borderColor = `var(--${slice.colour})`;

    // Add the percentage of the total chart that this flyout
    // and segment represents
    addSpan(`${skillScoreRounding(slice.adjustedPercent)}%`, flyout, 'percentage');

    // Add the label for the segment to the flyout
    addSpan(`${slice.label}`, flyout, 'label');

    // If the slice has a value that indicates what its value
    // was in the previous period, we show a label with its
    // percentage of change since the last period.
    if (!!slice.previousValue) {
      const isNegative = slice.previousValue > slice.value;
      const adjustedChange = percentageDifference(slice.previousValue, slice.value);

      const relativeTag = isNegative ? 'down' : 'up';

      // If the value has not changed, don't show a change marker.
      // If it has changed show a label and append the correct
      // class to indicate whether it went up or down
      if (adjustedChange !== 0) {
        addSpan(`${relativeTag} by ${skillScoreRounding(adjustedChange)}%`, flyout, `previous ${relativeTag}`, arrow(relativeTag));
      }
    }

    document.body.appendChild(flyout);
    target.addEventListener('mouseleave', () => flyout.remove());
  }
}

