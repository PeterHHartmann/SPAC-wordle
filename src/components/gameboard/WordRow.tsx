import type { GuessInput } from '../../lib/types';
import { WordQuadrant } from './WordQuadrant';

type Props = {
    rowData: GuessInput[];
};

export function WordRow({ rowData }: Props) {
    return (
        <>
            <div className='grid grid-cols-5 gap-1.5'>
                {rowData.map((guess, index) => (
                    <WordQuadrant key={`wordQuadrant-${index}`} guess={guess}></WordQuadrant>
                ))}
            </div>
        </>
    );
}