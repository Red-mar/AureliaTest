define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contacs';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Select' },
                { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBWUEsQ0FBQztRQVRHLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3ZELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtnQkFDeEQsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFFO2FBQ3pFLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ0NvbnRhY3MnO1xyXG4gICAgICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICAgICAgICB7IHJvdXRlOiAnJywgbW9kdWxlSWQ6ICduby1zZWxlY3Rpb24nLCB0aXRsZTogJ1NlbGVjdCcgfSxcclxuICAgICAgICAgICAgeyByb3V0ZTogJ2NvbnRhY3RzLzppZCcsIG1vZHVsZUlkOiAnY29udGFjdC1kZXRhaWwnLCBuYW1lOidjb250YWN0cycgfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1zZWxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("no-selection", [],function(){});

define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsa0JBQXlCLElBQUksRUFBRSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRkQsNEJBRUM7SUFBQSxDQUFDIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJlRXF1YWwob2JqMSwgb2JqMikge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoKGtleSkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChvYmoxW2tleV0gPT09IG9iajJba2V5XSkpO1xufTsiXSwic291cmNlUm9vdCI6InNyYyJ9

define('web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 200;
    var id = 0;
    function getId() {
        return ++id;
    }
    var contacts = [
        {
            id: getId(),
            firstName: 'John',
            lastName: 'Tolkien',
            email: 'tolkien@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Clive',
            lastName: 'Lewis',
            email: 'lewis@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Owen',
            lastName: 'Barfield',
            email: 'barfield@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Charles',
            lastName: 'Williams',
            email: 'williams@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Roger',
            lastName: 'Green',
            email: 'green@inklings.com',
            phoneNumber: '867-5309'
        }
    ];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = contacts.map(function (x) {
                        return {
                            id: x.id,
                            firstName: x.firstName,
                            lastName: x.lastName,
                            email: x.email
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = contacts.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(contact));
                    var found = contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = contacts.indexOf(found);
                        contacts[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        contacts.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QW1CQztZQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN4QixVQUFVLENBQUM7b0JBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFeEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDUixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUM3QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNKLFFBQVEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7d0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsYUFBQztJQUFELENBbERBLEFBa0RDLElBQUE7SUFsRFksd0JBQU0iLCJmaWxlIjoid2ViLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsYXRlbmN5ID0gMjAwO1xubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gZ2V0SWQoKXtcbiAgcmV0dXJuICsraWQ7XG59XG5cbmxldCBjb250YWN0cyA9IFtcbiAge1xuICAgIGlkOmdldElkKCksXG4gICAgZmlyc3ROYW1lOidKb2huJyxcbiAgICBsYXN0TmFtZTonVG9sa2llbicsXG4gICAgZW1haWw6J3RvbGtpZW5AaW5rbGluZ3MuY29tJyxcbiAgICBwaG9uZU51bWJlcjonODY3LTUzMDknXG4gIH0sXG4gIHtcbiAgICBpZDpnZXRJZCgpLFxuICAgIGZpcnN0TmFtZTonQ2xpdmUnLFxuICAgIGxhc3ROYW1lOidMZXdpcycsXG4gICAgZW1haWw6J2xld2lzQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J093ZW4nLFxuICAgIGxhc3ROYW1lOidCYXJmaWVsZCcsXG4gICAgZW1haWw6J2JhcmZpZWxkQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J0NoYXJsZXMnLFxuICAgIGxhc3ROYW1lOidXaWxsaWFtcycsXG4gICAgZW1haWw6J3dpbGxpYW1zQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J1JvZ2VyJyxcbiAgICBsYXN0TmFtZTonR3JlZW4nLFxuICAgIGVtYWlsOidncmVlbkBpbmtsaW5ncy5jb20nLFxuICAgIHBob25lTnVtYmVyOic4NjctNTMwOSdcbiAgfVxuXTtcblxuZXhwb3J0IGNsYXNzIFdlYkFQSSB7XG4gIGlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICBcbiAgZ2V0Q29udGFjdExpc3QoKXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHRzID0gY29udGFjdHMubWFwKHggPT4gIHsgcmV0dXJuIHtcbiAgICAgICAgICBpZDp4LmlkLFxuICAgICAgICAgIGZpcnN0TmFtZTp4LmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTp4Lmxhc3ROYW1lLFxuICAgICAgICAgIGVtYWlsOnguZW1haWxcbiAgICAgICAgfX0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250YWN0RGV0YWlscyhpZCl7XG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kKSkpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBzYXZlQ29udGFjdChjb250YWN0KXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xuXG4gICAgICAgIGlmKGZvdW5kKXtcbiAgICAgICAgICBsZXQgaW5kZXggPSBjb250YWN0cy5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgICBjb250YWN0c1tpbmRleF0gPSBpbnN0YW5jZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaW5zdGFuY2UuaWQgPSBnZXRJZCgpO1xuICAgICAgICAgIGNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9LCBsYXRlbmN5KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./styles.css\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Contacts</span>\n      </a>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">Contact List Placeholder</div>\n      <router-view class=\"col-md-8\"></router-view>\n    </div>\n  </div>\n\n</template>\n"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"no-selection text-center\">\n    <h2>${message}</h2>\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map