import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What do i need to do as a new employee in Signal Alliance Technology Holding (SATH)?",
        value: "What do i need to do as a new employee in Signal Alliance Technology Holding (SATH)?"
    },
    { text: "What happens in an Employee Performance Review Session?", value: "What happens in an Employee Performance Review Session?" },
    {
        text: "What are the Performance Eligibility Requirements for the Rewards policy?",
        value: "What are the Performance Eligibility Requirements for the Rewards policy?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
