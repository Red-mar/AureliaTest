define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contacts';
            config.map([
                { route: ['', 'home'], moduleId: 'no-selection', title: 'Select' },
                { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }
            ]);
            config.mapUnknownRoutes('./app');
            this.router = router;
            console.log(router);
            console.log(config);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUdJO1FBRUEsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBRXZELE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO2dCQUNqRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7YUFDekUsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBR2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0wsVUFBQztJQUFELENBdEJBLEFBc0JDLElBQUE7SUF0Qlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gICAgcm91dGVyOiBSb3V0ZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxyXG4gICAgfVxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdDb250YWN0cyc7XHJcbiAgICAgICAgY29uZmlnLm1hcChbXHJcbiAgICAgICAgICAgIHsgcm91dGU6IFsnJywgJ2hvbWUnXSwgbW9kdWxlSWQ6ICduby1zZWxlY3Rpb24nLCB0aXRsZTogJ1NlbGVjdCd9LFxyXG4gICAgICAgICAgICB7IHJvdXRlOiAnY29udGFjdHMvOmlkJywgbW9kdWxlSWQ6ICdjb250YWN0LWRldGFpbCcsIG5hbWU6ICdjb250YWN0cyd9XHJcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbmZpZy5tYXBVbmtub3duUm91dGVzKCcuL2FwcCcpO1xuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbiAgICAgICAgY29uc29sZS5sb2cocm91dGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-detail',["require", "exports", "aurelia-framework", "./web-api", "./utility"], function (require, exports, aurelia_framework_1, web_api_1, utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(api) {
            this.api = api;
        }
        ContactDetail.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.routeConfig = routeConfig;
            return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
            });
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.save = function () {
            var _this = this;
            this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
            });
        };
        ContactDetail.prototype.canDeactivate = function () {
            if (!utility_1.areEqual(this.originalContact, this.contact)) {
                return confirm('You have unsaved changes. Are you sure you wish to leave?');
            }
            return true;
        };
        return ContactDetail;
    }());
    ContactDetail = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI),
        __metadata("design:paramtypes", [web_api_1.WebAPI])
    ], ContactDetail);
    exports.ContactDetail = ContactDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdBLElBQWEsYUFBYTtRQUt0Qix1QkFBb0IsR0FBVztZQUFYLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBSSxDQUFDO1FBRXBDLGdDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVztZQUE1QixpQkFRQztZQVBHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO2dCQUNyRCxLQUFJLENBQUMsT0FBTyxHQUFZLE9BQU8sQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHNCQUFJLGtDQUFPO2lCQUFYO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3JGLENBQUM7OztXQUFBO1FBRUQsNEJBQUksR0FBSjtZQUFBLGlCQU1DO1lBTEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87Z0JBQzNDLEtBQUksQ0FBQyxPQUFPLEdBQVksT0FBTyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQscUNBQWEsR0FBYjtZQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUMsMkRBQTJELENBQUMsQ0FBQztZQUNoRixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQXBDQSxBQW9DQyxJQUFBO0lBcENZLGFBQWE7UUFEekIsMEJBQU0sQ0FBQyxnQkFBTSxDQUFDO3lDQU1jLGdCQUFNO09BTHRCLGFBQWEsQ0FvQ3pCO0lBcENZLHNDQUFhIiwiZmlsZSI6ImNvbnRhY3QtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBXZWJBUEkgfSBmcm9tICcuL3dlYi1hcGknO1xyXG5pbXBvcnQgeyBhcmVFcXVhbCB9IGZyb20gJy4vdXRpbGl0eSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFjdCB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5AaW5qZWN0KFdlYkFQSSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3REZXRhaWwge1xyXG4gICAgcm91dGVDb25maWc7XHJcbiAgICBjb250YWN0OiBDb250YWN0O1xyXG4gICAgb3JpZ2luYWxDb250YWN0OiBDb250YWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBXZWJBUEkpIHsgfVxyXG5cclxuICAgIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcpIHtcclxuICAgICAgICB0aGlzLnJvdXRlQ29uZmlnID0gcm91dGVDb25maWc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXRDb250YWN0RGV0YWlscyhwYXJhbXMuaWQpLnRoZW4oY29udGFjdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFjdCA9IDxDb250YWN0PmNvbnRhY3Q7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVDb25maWcubmF2TW9kZWwuc2V0VGl0bGUodGhpcy5jb250YWN0LmZpcnN0TmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3QpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FuU2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWN0LmZpcnN0TmFtZSAmJiB0aGlzLmNvbnRhY3QubGFzdE5hbWUgJiYgIXRoaXMuYXBpLmlzUmVxdWVzdGluZztcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIHRoaXMuYXBpLnNhdmVDb250YWN0KHRoaXMuY29udGFjdCkudGhlbihjb250YWN0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0ID0gPENvbnRhY3Q+Y29udGFjdDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZUNvbmZpZy5uYXZNb2RlbC5zZXRUaXRsZSh0aGlzLmNvbnRhY3QuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29udGFjdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgaWYgKCFhcmVFcXVhbCh0aGlzLm9yaWdpbmFsQ29udGFjdCwgdGhpcy5jb250YWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gbGVhdmU/Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-list',["require", "exports", "./web-api", "aurelia-framework"], function (require, exports, web_api_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactList = (function () {
        function ContactList(api) {
            this.api = api;
            this.selectedId = 0;
        }
        ContactList.prototype.created = function () {
            var _this = this;
            this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
        };
        ContactList.prototype.select = function (contact) {
            this.selectedId = contact.id;
            return true;
        };
        return ContactList;
    }());
    ContactList = __decorate([
        aurelia_framework_1.inject(web_api_1.WebAPI),
        __metadata("design:paramtypes", [web_api_1.WebAPI])
    ], ContactList);
    exports.ContactList = ContactList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLFdBQVc7UUFJcEIscUJBQW9CLEdBQVc7WUFBWCxRQUFHLEdBQUgsR0FBRyxDQUFRO1lBRi9CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFb0IsQ0FBQztRQUVwQyw2QkFBTyxHQUFQO1lBQUEsaUJBRUM7WUFERyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELDRCQUFNLEdBQU4sVUFBTyxPQUFPO1lBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FkQSxBQWNDLElBQUE7SUFkWSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsZ0JBQU0sQ0FBQzt5Q0FLYyxnQkFBTTtPQUp0QixXQUFXLENBY3ZCO0lBZFksa0NBQVciLCJmaWxlIjoiY29udGFjdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViQVBJIH0gZnJvbSAnLi93ZWItYXBpJztcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChXZWJBUEkpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdCB7XHJcbiAgICBjb250YWN0cztcclxuICAgIHNlbGVjdGVkSWQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBXZWJBUEkpIHsgfVxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5hcGkuZ2V0Q29udGFjdExpc3QoKS50aGVuKGNvbnRhY3RzID0+IHRoaXMuY29udGFjdHMgPSBjb250YWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGNvbnRhY3QpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Please Select a Contact.";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0ksWUFBTyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLENBQUM7UUFBRCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVciLCJmaWxlIjoibm8tc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vU2VsZWN0aW9uIHtcclxuICAgIG1lc3NhZ2UgPSBcIlBsZWFzZSBTZWxlY3QgYSBDb250YWN0LlwiO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVYO1FBQ0UsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksUUFBUSxHQUFHO1FBQ2I7WUFDRSxFQUFFLEVBQUMsS0FBSyxFQUFFO1lBQ1YsU0FBUyxFQUFDLE1BQU07WUFDaEIsUUFBUSxFQUFDLFNBQVM7WUFDbEIsS0FBSyxFQUFDLHNCQUFzQjtZQUM1QixXQUFXLEVBQUMsVUFBVTtTQUN2QjtRQUNEO1lBQ0UsRUFBRSxFQUFDLEtBQUssRUFBRTtZQUNWLFNBQVMsRUFBQyxPQUFPO1lBQ2pCLFFBQVEsRUFBQyxPQUFPO1lBQ2hCLEtBQUssRUFBQyxvQkFBb0I7WUFDMUIsV0FBVyxFQUFDLFVBQVU7U0FDdkI7UUFDRDtZQUNFLEVBQUUsRUFBQyxLQUFLLEVBQUU7WUFDVixTQUFTLEVBQUMsTUFBTTtZQUNoQixRQUFRLEVBQUMsVUFBVTtZQUNuQixLQUFLLEVBQUMsdUJBQXVCO1lBQzdCLFdBQVcsRUFBQyxVQUFVO1NBQ3ZCO1FBQ0Q7WUFDRSxFQUFFLEVBQUMsS0FBSyxFQUFFO1lBQ1YsU0FBUyxFQUFDLFNBQVM7WUFDbkIsUUFBUSxFQUFDLFVBQVU7WUFDbkIsS0FBSyxFQUFDLHVCQUF1QjtZQUM3QixXQUFXLEVBQUMsVUFBVTtTQUN2QjtRQUNEO1lBQ0UsRUFBRSxFQUFDLEtBQUssRUFBRTtZQUNWLFNBQVMsRUFBQyxPQUFPO1lBQ2pCLFFBQVEsRUFBQyxPQUFPO1lBQ2hCLEtBQUssRUFBQyxvQkFBb0I7WUFDMUIsV0FBVyxFQUFDLFVBQVU7U0FDdkI7S0FDRixDQUFDO0lBRUY7UUFBQTtZQUNFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBaUR2QixDQUFDO1FBL0NDLCtCQUFjLEdBQWQ7WUFBQSxpQkFjQztZQWJDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ3hCLFVBQVUsQ0FBQztvQkFDVCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt3QkFBTyxNQUFNLENBQUM7NEJBQ3hDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBRTs0QkFDUCxTQUFTLEVBQUMsQ0FBQyxDQUFDLFNBQVM7NEJBQ3JCLFFBQVEsRUFBQyxDQUFDLENBQUMsUUFBUTs0QkFDbkIsS0FBSyxFQUFDLENBQUMsQ0FBQyxLQUFLO3lCQUNkLENBQUE7b0JBQUEsQ0FBQyxDQUFDLENBQUM7b0JBQ0osT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsa0NBQWlCLEdBQWpCLFVBQWtCLEVBQUU7WUFBcEIsaUJBU0M7WUFSQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN4QixVQUFVLENBQUM7b0JBQ1QsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzVCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELDRCQUFXLEdBQVgsVUFBWSxPQUFPO1lBQW5CLGlCQW1CQztZQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUN4QixVQUFVLENBQUM7b0JBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFeEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQzt3QkFDUixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUM3QixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNKLFFBQVEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7d0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsYUFBQztJQUFELENBbERBLEFBa0RDLElBQUE7SUFsRFksd0JBQU0iLCJmaWxlIjoid2ViLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsYXRlbmN5ID0gMjAwO1xubGV0IGlkID0gMDtcblxuZnVuY3Rpb24gZ2V0SWQoKXtcbiAgcmV0dXJuICsraWQ7XG59XG5cbmxldCBjb250YWN0cyA9IFtcbiAge1xuICAgIGlkOmdldElkKCksXG4gICAgZmlyc3ROYW1lOidKb2huJyxcbiAgICBsYXN0TmFtZTonVG9sa2llbicsXG4gICAgZW1haWw6J3RvbGtpZW5AaW5rbGluZ3MuY29tJyxcbiAgICBwaG9uZU51bWJlcjonODY3LTUzMDknXG4gIH0sXG4gIHtcbiAgICBpZDpnZXRJZCgpLFxuICAgIGZpcnN0TmFtZTonQ2xpdmUnLFxuICAgIGxhc3ROYW1lOidMZXdpcycsXG4gICAgZW1haWw6J2xld2lzQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J093ZW4nLFxuICAgIGxhc3ROYW1lOidCYXJmaWVsZCcsXG4gICAgZW1haWw6J2JhcmZpZWxkQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J0NoYXJsZXMnLFxuICAgIGxhc3ROYW1lOidXaWxsaWFtcycsXG4gICAgZW1haWw6J3dpbGxpYW1zQGlua2xpbmdzLmNvbScsXG4gICAgcGhvbmVOdW1iZXI6Jzg2Ny01MzA5J1xuICB9LFxuICB7XG4gICAgaWQ6Z2V0SWQoKSxcbiAgICBmaXJzdE5hbWU6J1JvZ2VyJyxcbiAgICBsYXN0TmFtZTonR3JlZW4nLFxuICAgIGVtYWlsOidncmVlbkBpbmtsaW5ncy5jb20nLFxuICAgIHBob25lTnVtYmVyOic4NjctNTMwOSdcbiAgfVxuXTtcblxuZXhwb3J0IGNsYXNzIFdlYkFQSSB7XG4gIGlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICBcbiAgZ2V0Q29udGFjdExpc3QoKXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHRzID0gY29udGFjdHMubWFwKHggPT4gIHsgcmV0dXJuIHtcbiAgICAgICAgICBpZDp4LmlkLFxuICAgICAgICAgIGZpcnN0TmFtZTp4LmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTp4Lmxhc3ROYW1lLFxuICAgICAgICAgIGVtYWlsOnguZW1haWxcbiAgICAgICAgfX0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250YWN0RGV0YWlscyhpZCl7XG4gICAgdGhpcy5pc1JlcXVlc3RpbmcgPSB0cnVlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvdW5kKSkpO1xuICAgICAgICB0aGlzLmlzUmVxdWVzdGluZyA9IGZhbHNlO1xuICAgICAgfSwgbGF0ZW5jeSk7XG4gICAgfSk7XG4gIH1cblxuICBzYXZlQ29udGFjdChjb250YWN0KXtcbiAgICB0aGlzLmlzUmVxdWVzdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xuICAgICAgICBsZXQgZm91bmQgPSBjb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xuXG4gICAgICAgIGlmKGZvdW5kKXtcbiAgICAgICAgICBsZXQgaW5kZXggPSBjb250YWN0cy5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgICBjb250YWN0c1tpbmRleF0gPSBpbnN0YW5jZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaW5zdGFuY2UuaWQgPSBnZXRJZCgpO1xuICAgICAgICAgIGNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9LCBsYXRlbmN5KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./style.css\"></require>\r\n  <require from=\"./contact-list\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-user\"></i>\r\n        <span>Contacts</span>\r\n      </a>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <contact-list class=\"col-md-4\"></contact-list>\r\n      <router-view class=\"col-md-8\"></router-view>\r\n    </div>\r\n  </div>\n\n</template>\n"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\n  padding-top: 70px; }\n\nsection {\n  margin: 0 20px; }\n\na:focus {\n  outline: none; }\n\n.navbar-nav li.loader {\n  margin: 12px 24px 0 6px; }\n\n.no-selection {\n  margin: 20px; }\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px; }\n\n.panel {\n  margin: 20px; }\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white; }\n\n.button-bar > button {\n  float: right;\n  margin: 20px; }\n\nli.list-group-item {\n  list-style: none; }\n\nli.list-group-item > a {\n  text-decoration: none; }\n\nli.list-group-item.active > a {\n  color: white; }\n"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Profile</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form role=\"form\" class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">First Name</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">Last Name</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">Email</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label\">Phone Number</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button-bar\">\r\n    <button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button>\r\n  </div>\r\n</template>"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"contact-list\">\r\n    <ul class=\"list-group\">\r\n      <li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\">\r\n        <a route-href=\"route: contacts; params.bind: {id:contact.id}\" click.delegate=\"$parent.select(contact)\">\r\n          <h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4>\r\n          <p class=\"list-group-item-text\">${contact.email}</p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"no-selection text-center\">\r\n    <h2>${message}</h2>\r\n  </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map