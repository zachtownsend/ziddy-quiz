import React, { createContext, ReactNode, ReducerAction, useReducer, useState } from 'react';

enum QuizSettingActions {
    SET_AMOUNT = 'SET_AMOUNT',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_DIFFICULTY = 'SET_DIFFICULTY',
    SET_TIMER = 'SET_TIMER',
}

export enum QuizCategories {
    GeneralKnowledge = 'General Knowledge',
    EntertainmentBooks = 'Entertainment: Books',
    EntertainmentFilm = 'Entertainment: Film',
    EntertainmentMusic = 'Entertainment: Music',
    EntertainmentMusicalsTheatres = 'Entertainment: Musicals &amp; Theatres',
    EntertainmentTelevision = 'Entertainment: Television',
    EntertainmentVideoGames = 'Entertainment: Video Games',
    EntertainmentBoardGames = 'Entertainment: Board Games',
    ScienceNature = 'Science &amp; Nature',
    ScienceComputers = 'Science: Computers',
    ScienceMathematics = 'Science: Mathematics',
    Mythology = 'Mythology',
    Sports = 'Sports',
    Geography = 'Geography',
    History = 'History',
    Politics = 'Politics',
    Art = 'Art',
    Celebrities = 'Celebrities',
    Animals = 'Animals',
    Vehicles = 'Vehicles',
    EntertainmentComics = 'Entertainment: Comics',
    ScienceGadgets = 'Science: Gadgets',
    EntertainmentJapaneseAnimeManga = 'Entertainment: Japanese Anime &amp; Manga',
    EntertainmentCartoonAnimations = 'Entertainment: Cartoon &amp; Animations',
}

enum QuizCategoryID {
    GeneralKnowledge = 9,
    EntertainmentBooks = 10,
    EntertainmentFilm = 11,
    EntertainmentMusic = 12,
    EntertainmentMusicalsTheatres = 13,
    EntertainmentTelevision = 14,
    EntertainmentVideoGames = 15,
    EntertainmentBoardGames = 16,
    ScienceNature = 17,
    ScienceComputers = 18,
    ScienceMathematics = 19,
    Mythology = 20,
    Sports = 21,
    Geography = 22,
    History = 23,
    Politics = 24,
    Art = 25,
    Celebrities = 26,
    Animals = 27,
    Vehicles = 28,
    EntertainmentComics = 29,
    ScienceGadgets = 30,
    EntertainmentJapaneseAnimeManga = 31,
    EntertainmentCartoonAnimations = 32,
}

enum QuizType {
    Multiple = 'multiple',
    Boolean = 'boolean'
}

export enum QuizDifficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard'
}

export interface IQuestionCategories {
    [key: number]: QuizCategories;
}

interface IQuestion {
    category: QuizCategories;
    type: QuizType;
    difficulty: QuizDifficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[]
}

interface IQuizSettings {
    amount: number;
    category: QuizCategoryID | null;
    difficulty: QuizDifficulty | null;
    timer: number;
}

interface IQuizContext {
    currentQuestion: IQuestion | null,
    questions: IQuestion[] | null,
    quizSettings: IQuizSettings;
    dispatchQuizSettings(action: any): void;
}

const initialQuizState: IQuizSettings = {
    amount: 10,
    category: null,
    difficulty: null,
    timer: 0,
};

const QuizContext = createContext<IQuizContext>({
    currentQuestion: null,
    questions: null,
    quizSettings: initialQuizState,
    dispatchQuizSettings: () => {}
});


function quizSettingsReducer(state: IQuizSettings, action: any) {
    switch(action.type) {
        case QuizSettingActions.SET_AMOUNT:
            return {
                ...state,
                amount: state.amount,
            }

        case QuizSettingActions.SET_CATEGORY:
            return {
                ...state,
                category: state.category
            };

        case QuizSettingActions.SET_DIFFICULTY:
            return {
                ...state,
                difficulty: state.difficulty
            };

        case QuizSettingActions.SET_TIMER:
            return {
                ...state,
                timer: state.timer
            };

        default:
            return state;
    }
}

interface Props {
    children: ReactNode;
}

export const QuizProvider = ({ children }: Props) => {
    const [currentQuestion, setCurrerntQuestion] = useState<IQuestion | null>(null);
    const [questions, setQuestions] = useState<IQuestion[] | null>(null);
    const [quizSettings, dispatchQuizSettings] = useReducer(quizSettingsReducer, initialQuizState);

    return (
        <QuizContext.Provider value={{
            currentQuestion,
            questions,
            quizSettings,
            dispatchQuizSettings
        }}>
            {children}
        </QuizContext.Provider>
    );
}

export default QuizContext;