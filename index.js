module.exports = {
    ra: {
        action: {
            add_filter: 'Filtrer',
            add: 'Legg til',
            back: 'Tilbake',
            bulk_actions: '1 element valgt |||| %{smart_count} elementer valgt',
            cancel: 'Avbryt',
            clear_input_value: 'Tøm',
            clone: 'Kopier',
            confirm: 'Bekreft',
            create: 'Opprett',
            delete: 'Slett',
            edit: 'Rediger',
            export: 'Eksport',
            list: 'Liste',
            refresh: 'Oppfrisk',
            remove_filter: 'Fjern dette filteret',
            remove: 'Fjern',
            save: 'Lagre',
            search: 'Søk',
            show: 'Vis',
            sort: 'Sorter',
            undo: 'Angre',
        },
        boolean: {
            true: 'Ja',
            false: 'Nei',
        },
        page: {
            create: 'Opprett %{name}',
            dashboard: 'Oversikt',
            edit: '%{name} #%{id}',
            error: 'Noe gikk galt',
            list: '%{name}',
            loading: 'Laster',
            not_found: 'Ikke funnet',
            show: '%{name} #%{id}',
            empty: 'Ingen %{name} enda.',
            invite: 'Vil du legge til en?'
        },
        input: {
            file: {
                upload_several:
                    'Dra og slipp noen filer for å laste opp, eller klikk for å velge.',
                upload_single: 'Dra og slipp en fil som skal lastes opp, eller klikk for å velge.',
            },
            image: {
                upload_several:
                    'Dra og slipp noen bilder for å laste opp, eller klikk for å velge.',
                upload_single:
                    'Dra og slipp et bilde som skal lastes opp, eller klikk for å velge.',
            },
            references: {
                all_missing: 'Klarte ikke å finne referansedata',
                many_missing:
                    'Minst én av de tilknyttede referansene ser ikke lenger ut til å være tilgjengelige.',
                single_missing:
                    'Tilknyttet referanse ser ikke ut til å være tilgjengelig.',
            },
        },
        message: {
            about: 'Om',
            are_you_sure: 'Er du sikker?',
            bulk_delete_content:
                'Er du sikker på at du vil slette denne %{name}? |||| Er du sikker på at du vil slette disse %{smart_count} elementene?',
            bulk_delete_title:
                'Slett %{name} |||| Slett %{smart_count} %{name}',
            delete_content: 'Er du sikker på at du vil slette dette elementet?',
            delete_title: 'Slett %{name} #%{id}',
            details: 'Detaljer',
            error:
                "En klientfeil oppstod og din forespørsel kunne ikke ble fullført.",
            invalid_form: 'Skjemaet er ugyldig. Vennligst sjekk for feil.',
            loading: 'Siden laster, et lite øyeblikk bare',
            no: 'Nei',
            not_found:
                'Du har skrevet feil URL eller fulgt en ugyldig lenke.',
            yes: 'Ja',
        },
        navigation: {
            no_results: 'Ingen resultater funnet',
            no_more_results:
                'Side %{page} er utenfor avmålt område. Prøv forrige side.',
            page_out_of_boundaries: 'Side %{page} er utenfor avmålt område',
            page_out_from_end: 'Kan ikke gå forbi siste side',
            page_out_from_begin: 'Kan ikke gå før side 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            page_rows_per_page: 'Rader pr side:',
            next: 'Neste',
            prev: 'Forrige',
        },
        auth: {
            auth_check_error: 'Vennligst logg inn for å fortsette',
            user_menu: 'Profil',
            username: 'Brukernavn',
            password: 'Passord',
            sign_in: 'Logg inn',
            sign_in_error: 'Pålogging feilet, vennligst prøv igjen',
            logout: 'Logg ut',
        },
        notification: {
            updated: 'Element oppdatert |||| %{smart_count} elementer oppdatert',
            created: 'Element opprettet',
            deleted: 'Element slettet |||| %{smart_count} elementer slettet',
            bad_item: 'Ugyldig element',
            item_doesnt_exist: 'Elementet finnes ikke',
            http_error: 'Server kommunikasjonsfeil',
            data_provider_error:
                'dataProvider feil. Sjekk konsollen for detaljer.',
            canceled: 'Operasjon avbrutt',
            logged_out: 'Din sesjon har utløpt, vennligst koble til på nytt.',
        },
        validation: {
            required: 'Påkrevd',
            minLength: 'Må ha minimum %{min} bokstaver',
            maxLength: 'Må ha %{max} eller færre bokstaver',
            minValue: 'Må være minst %{min}',
            maxValue: 'Må være %{max} eller mindre',
            number: 'Må være et tall',
            email: 'Må være en gyldig epost',
            oneOf: 'Må være en av: %{options}',
            regex: 'Må være på bestemt format (regexp): %{pattern}',
        },
    },
};