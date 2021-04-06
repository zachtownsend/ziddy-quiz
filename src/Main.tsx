import React, { useContext } from 'react'
import QuizContext from './contexts/QuizContext'
import { Setup } from './pages/Setup';

interface Props {

}

export const Main = (props: Props) => {
    const { questions } = useContext(QuizContext);

    if (questions === null) {
        return <Setup />;
    }

    return <h1>Oops</h1>
}
