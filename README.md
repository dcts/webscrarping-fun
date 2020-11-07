# WEBSCRAPING AND API FUN

### goals instagram API
- [ ] reverse engeneer undocumented endpoint to check if a instagram handle is already taken or abvailible?
  - handleIsValid?
    - endpoint    : `localhost:8000/handleIsValid?handle={instagramHandle}`
    - description : checks if handle follows instagram rules
  - handleIsAvailible?
    - endpoint    : `localhost:8000/handleIsAvailible?handle={instagramHandle}`
    - description : checks if handle is availible
  - emailIsAvailible?
    - endpoint    : `localhost:8000/emailIsAvailible?email={email}`
    - description : checks if a given email is tied to instagram account
- [ ] write API on localhost
- [ ] 🚀 deploy API google cloud (public)

FINDINGS:
- blocking after 10 requests in short time


### job scraping
- [ ] find a site to scrape job post from
- [ ] scrape single job
- [ ] write custom API to scrape jobs of a given day
  - `localhost:8000/newJobsToday`
- [ ] (MAYBE) 🚀 deploy API to google cloud

