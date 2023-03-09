import { TUI_VALIDATION_ERRORS } from "@taiga-ui/kit";
import { interval, scan, map, startWith } from "rxjs";

function maxLengthValidator(context: { requiredLength: string }): string {
    return `Maximum length — ${context.requiredLength}`;
}

function minLengthValidator(context: { requiredLength: string }): string {
    return `Minimum length — ${context.requiredLength}`;
}


export const validationConfig = {
    provide: TUI_VALIDATION_ERRORS,
    useValue: {
        required: 'Enter this!',
        email: 'Enter a valid email',
        maxlength: maxLengthValidator,
        minlength: minLengthValidator,
        min: interval(2000).pipe(
            scan(acc => !acc, false),
            map(val => (val ? 'Fix please' : 'Min number 3')),
            startWith('Min number 3'),
        )
    }
};