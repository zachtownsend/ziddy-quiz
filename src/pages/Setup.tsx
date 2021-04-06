import { Button, Container, FormControl, FormGroup, FormHelperText, Input, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { IQuestionCategories, QuizCategories, QuizDifficulty } from '../contexts/QuizContext';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6)
    }
}));

const categories: IQuestionCategories = {
    9: QuizCategories.GeneralKnowledge,
    10: QuizCategories.EntertainmentBooks,
    11: QuizCategories.EntertainmentFilm,
    12: QuizCategories.EntertainmentMusic,
    13: QuizCategories.EntertainmentMusicalsTheatres,
    14: QuizCategories.EntertainmentTelevision,
    15: QuizCategories.EntertainmentVideoGames,
    16: QuizCategories.EntertainmentBoardGames,
    17: QuizCategories.ScienceNature,
    18: QuizCategories.ScienceComputers,
    19: QuizCategories.ScienceMathematics,
    20: QuizCategories.Mythology,
    21: QuizCategories.Sports,
    22: QuizCategories.Geography,
    23: QuizCategories.History,
    24: QuizCategories.Politics,
    25: QuizCategories.Art,
    26: QuizCategories.Celebrities,
    27: QuizCategories.Animals,
    28: QuizCategories.Vehicles,
    29: QuizCategories.EntertainmentComics,
    30: QuizCategories.ScienceGadgets,
    31: QuizCategories.EntertainmentJapaneseAnimeManga,
    32: QuizCategories.EntertainmentCartoonAnimations,
};

const difficulty = {
    [QuizDifficulty.Easy]: 'Easy',
    [QuizDifficulty.Medium]: 'Medium',
    [QuizDifficulty.Hard]: 'Hard',
};

export const Setup = (props: Props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.heroContent}>
                <Typography component="h1" variant="h2" gutterBottom>Set up your quiz</Typography>
            </Container>
            <Container>
                <form>
                    <FormGroup>
                        <FormControl>
                            <InputLabel htmlFor="amount">Number of questions</InputLabel>
                            <Input id="amount" aria-describedby="amount-helper-text" type="number" />
                            <FormHelperText id="amount-helper-text">Choose amount of questions for quiz. Maximum of 30.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="category">Category</InputLabel>
                            <Select id="category" aria-describedby="category-helper-text">
                                {Object.entries(categories).map(([value, label]) => <MenuItem value={value}>{label}</MenuItem>)}
                            </Select>
                            <FormHelperText id="category-helper-text">Choose category.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
                            <Select id="difficulty" aria-describedby="difficulty-helper-text">
                                {Object.entries(difficulty).map(([value, label]) => <MenuItem value={value}>{label}</MenuItem>)}
                            </Select>
                            <FormHelperText id="difficulty-helper-text">Choose difficulty.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="timer">Timer to answer questions</InputLabel>
                            <Input id="timer" aria-describedby="timer-helper-text" type="number" />
                            <FormHelperText id="timer-helper-text">Choose amount of time to answer questions.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <Button type="submit">Generate Quiz</Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </Container>
        </React.Fragment>
    )
}
