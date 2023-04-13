# App

GymPass style app.

## FRs (Functional Requirements)

- [x] Should be able to register;
- [x] Should be able to authenticate;
- [x] Should be able to get logged user profile;
- [x] Should be able to get number of check-ins done by the logged user;
- [x] Should be able to get the history of check-ins;
- [x] Should be able to search for nearby gyms;
- [x] Should be able to search a gym by its name;
- [x] Should be able to check into a gym;
- [x] Should be able to validate user's check in;
- [x] Should be able to register a new gym;

## BSs (Business Rules)

- [x] User shouldn't be able to register with an existent registered email;
- [x] User can't do two check-ins at same day;
- [x] User can't do the check-in if not in 100m away from the gym;
- [x] Check-in can only be validated after 20 minutes after creation;
- [ ] Check-in can only be validated by admins;
- [ ] Gym can only be registered by admins;

## NFs (Non-functional Requirements)

- [x] The user's password needs to be encrypted;
- [x] The data of the application needs to be persisted on a PostGresSQL DB;
- [x] All data lists needs to be paginated with 20 items per page;
- [ ] The user needs to be identified by JWT (JSON web token);