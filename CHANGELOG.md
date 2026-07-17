# Space Safari — Changelog

What’s new in the Space Safari festival app. Newest first.

## Version 1.6.8 — July 2026

- The "full changelog" note under "What's new" is now a clickable link to the GitHub repo's CHANGELOG.md.

## Version 1.6.7 — July 2026

- Added a "(see github repo for full changelog)" note under "What's new" in Settings.

## Version 1.6.6 — July 2026

- "What's new" version headings now show major.minor again, matching how they looked before.

## Version 1.6.5 — July 2026

- Settings page now shows the full version number instead of just major.minor.

## Version 1.6.4 — July 2026

- Fixed: switching from Favorites to Discovery inside "Your favorites" could land you mid-list instead of at the top.

## Version 1.6.3 — July 2026

- Fixed: swiping down to close the artist page felt sluggish compared to Settings. Now dismisses smoothly from anywhere on the page, not just when scrolled to the top.

## Version 1.6.2 — July 2026

- Improved an artist bio with more detail from their own SoundCloud page.

## Version 1.6.1 — July 2026

- Fixed: the calendar reminder ("Set a reminder") wasn't opening the Calendar app on iOS when the app was installed to the Home Screen. Now works there too.

## Version 1.6.0 — July 2026

- New: a "Send feedback" button in Settings, under About, so you can report a bug or suggest something directly.

## Version 1.5.19 — July 2026

- More artist pages now show other festivals they've played, from a new research round (coverage up from 55% to 65% of the lineup).

## Version 1.5.18 — July 2026

- Reworded the "why this pick" line on the Surprise-me reveal card for a favorite-based match, for clearer phrasing.

## Version 1.5.17 — July 2026

- Small text-sizing tweak in the ratings-explanation popup, so the intro line reads more clearly than the "Rating vs. favoriting" heading below it.

## Version 1.5.16 — July 2026

- Cleaned up how other-festivals-played is stored behind the scenes (e.g. spelling/spacing variants of the same festival name now show consistently under one name). No visible change to filtering, just cleaner data.

## Version 1.5.15 — July 2026

- Fixed a bug where a record label's role note in parentheses (e.g. "Iboga Records (co-founder, with Emok)") could get split into extra garbled tags in the artist panel's Label row. Now the parenthetical content always stays with its label.

## Version 1.5.14 — July 2026

- Cleaned up how record labels are stored behind the scenes (e.g. "Cocoon"/"Cocoon Recordings", "Digital Om"/"Digital Om Records"/"Digital Om Productions" now all show consistently under one name). No visible change to filtering, just cleaner data.

## Version 1.5.13 — July 2026

- Fixed a bug where tapping "show more"/"show less" on a long festival list opened a broken empty filter screen instead of just expanding the list.

## Version 1.5.12 — July 2026

- Long festival lists on artist pages now collapse to one line by default, with a tap to show the rest, so they don't push the bio and links far down the page.

## Version 1.5.11 — July 2026

- Cleaned up how countries are stored behind the scenes (e.g. "United Kingdom", "UK", and city-specific variants like "United Kingdom (London)" now all show consistently as "UK"). No visible change to filtering, just cleaner data.

## Version 1.5.10 — July 2026

- Favorites and Discovery now show each artist's genre on the card when sorted "By genre", so you can actually see what you're sorting by.

## Version 1.5.9 — July 2026

- The "Not for me" rating no longer uses the same red color as the heart icon, so they're easier to tell apart at a glance on schedule cards.
- Small wording tweak to the ratings explanation popup, clarifying that ratings and notes are carried over to other festival apps via manual export.

## Version 1.5.8 — July 2026

- The one-time popup that appears when you turn on ratings and notes now also explains the difference between the heart (favoriting) and ratings, based on real feedback from a user who found this confusing.

## Version 1.5.7 — July 2026

- Genre tags now display with consistent capitalization (e.g. "Trance" instead of mixed "trance"/"Trance"), for tidier presentation of artist profiles.

## Version 1.5.6 — July 2026

- User-reviewed genre cleanup: merged 20 groups of near-duplicate genre tags into one consistent name each, removed 15 stray non-genre tags, and fixed "Concrete Music" to its correct name "Musique Concrète".

## Version 1.5.5 — July 2026

- Caught a few remaining "Psychedelic Trance"/"Dark Psytrance" genre tags that the previous cleanup missed (lowercase spelling), now correctly merged into "Psytrance"/"Darkpsy" too.

## Version 1.5.4 — July 2026

- Tidied up genre tags that were stored with inconsistent capitalization (e.g. "Techno" and "techno" stored as separate values behind the scenes, even though the genre filter already treated them as the same). No visible change to filtering, just cleaner data.

## Version 1.5.3 — July 2026

- Fixed the "Le Motel & Simsaara" collab act, which was showing as one plain block of text instead of separate, tappable artist entries.

## Version 1.5.2 — July 2026

- Fixed a handful of artist bios and genre tags that didn't match the artist's actual music (a mislabeled bio, some wrong genre tags, one duplicated genre tag).
- Merged "Psychedelic Trance" and "Dark Psytrance" into their more common short names, "Psytrance" and "Darkpsy", in the genre filters.

## Version 1.5.1 — July 2026

- Fixed genre filters that showed the same genre twice under different spellings (e.g. "drum and bass" and "drum'n'bass" now both show as one "Drum & Bass" filter).

## Version 1.5.0 — July 2026

- New: artist pages now show other festivals they've played, where that could be verified from a real source.

## Version 1.4.10 — July 2026

- Artist pages now clearly show when there's no bio or links available, instead of just leaving blank space.

## Version 1.4.9 — July 2026

- Added a subtle hint when a screen has more content below, so it's clear you can scroll for more.

## Version 1.4.8 — July 2026

- Made the schedule's time column narrower.
- Fixed AM/PM sitting oddly next to the time instead of underneath it, in 12-hour mode.
- Added a short explainer above the "Export ratings / notes" button.

## Version 1.4.7 — July 2026

- Moved exporting ratings and notes to its own screen in Settings, so it's no longer mixed up with the favorites backup code.

## Version 1.4.6 — July 2026

- Fixed Grid view (this app's default view) not starting with all 4 stages checked.

## Version 1.4.5 — July 2026

- Fixed the Now Playing card having square corners on the bottom.

## Version 1.4.4 — July 2026

- Fixed the reminder screen being hidden behind the artist page.

## Version 1.4.3 — July 2026

- Swipe down to close an artist page now works from anywhere on the screen, not just the small handle at the top.
- Notes no longer have a strict character limit, and the field grows as you type.
- Tapping a note in "My Notes" now opens it directly.
- Closing an artist page now takes you back to where you were in Favorites or Discovery, not the home screen.
- The Now Playing card is now centered on screen instead of stuck to the bottom.
- Artists with more than one country listed can now be filtered by either country.
- Added a custom time option for reminders.

## Version 1.4.2 — July 2026

- Rounded the rating and note icons to match the rest of the app.
- Fixed the background page scrolling behind an open screen.

## Version 1.4.1 — July 2026

- Fixed the rating icon overlapping long artist names.

## Version 1.4.0 — July 2026

- New: filter and sort artists by genre in both Favorites and Discovery.

## Version 1.3.0 — July 2026

- New: Surprise me now factors in the artists you've rated ▲ Love, not just your favorites — and tells you why it picked who it picked.
- New: sort the Discovery list by rating, not just by time.
- New: add a private note to any artist — visible only to you, never shared.
- Renamed rating labels for clarity: ▲ Love, ● Like, ▼ Not for me.

## Version 1.2.0 — July 2026

- New: back-to-back sets are now clearly marked, with links to each artist when available.

## Version 1.1.0 — July 2026

- New: rate the artists you explore — mark each one ▲ Loved it, ● Liked it, or ▼ Not for me.
- New: carry your ratings across festival apps — export them here, then import them into another festival’s app.
- Cleaned up and improved artist descriptions across the lineup.

## Version 1.0.0 — July 2026

- Browse the full Space Safari lineup — opens in grid view, or switch to a list or stage rows.
- Tap any artist for their bio, photo, genres, and links.
- Star your must-sees and set reminders before they start.
- Discovery checkmarks to track who you’ve already explored.
- Save or restore your favorites with a short code, and compare with friends.
- Works fully offline once added to your home screen — your data stays on your device, no account or tracking.
