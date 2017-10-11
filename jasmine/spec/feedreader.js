/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* A test suite just contains a related set of tests. This suite is all about the RSS
     feeds definitions, the allFeeds variable in our application.*/

    describe('RSS Feeds', function() {

        //check if allFeeds variable has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        it("URL defined", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        //Loop through each feed in allFeeds object to check if it has a name defined and that name is not empty
        it("Name defined", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* A new test suite named "The menu" */
    describe("The menu", function() {

        var body = document.querySelector("body");
        var menu = document.querySelector(".menu-icon-link");

        //Check if the menu element is hidden by defalut after the page is loaded
        it("Menu hidden on start", function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        //Check if the menu changes visibility when is clicked
        it("Menu changes on click", function() {
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    //A new test suite named "Initial Entries" 
    describe("Initial Entries", function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        //Check if when the loadFeed function is called there is at least one .entry element within the .feed container
        it("At least one entry in feed container", function() {
            var entries = document.querySelectorAll(".feed .entry").length;
            expect(entries).toBeGreaterThan(0);
        });


    });


    //A new test suite named "New Feed Selection"
    describe("New Feed Selection", function() {
        var initFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeed = document.querySelector(".feed").innerHTML;
                loadFeed(1, function() {
                    done();
                });
            });
        });

        //Check if when a new feed is loaded by the loadFeed function that the content actually changes
        it("The feed content is updated", function() {
            var newFeed = document.querySelector(".feed").innerHTML;
            expect(initFeed).not.toEqual(newFeed);
            console.log(initFeed);
            console.log(initFeed);
        });
    });

}());