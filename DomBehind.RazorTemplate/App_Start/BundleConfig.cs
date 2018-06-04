using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace DomBehind.RazorTemplate
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // site all css bundles
            bundles.Add(new StyleBundle("~/bundles/css").Include(Css));

            // site nuget js bundles
            bundles.Add(new ScriptBundle("~/bundles/nuget-js").Include(NugetJs));

            // application js bundles
            bundles.Add(new ScriptBundle("~/bundles/app-js").Include(AppJs));
        }

        public static readonly string[] Css = new string[] {
             "~/Content/bootstrap*",
             "~/Content/w2ui-1.5.rc1.css",
             "~/Content/font-awesome.css",

             "~/Content/Site.css",
             "~/Content/Signin/Signin.css",
             "~/Content/ContentsHoge/ContentsHoge.css",
             "~/Content/ContentsHogeHoge/ContentsHogeHoge.css",
        };

        public static readonly string[] NugetJs = new string[] {
            "~/Scripts/bootstrap.js",
            "~/Scripts/jquery-{version}.js",
            "~/Scripts/jquery.validate*",
            "~/Scripts/collections.js",
            "~/Scripts/w2ui-1.5.rc1.js",
            "~/Scripts/dombehind.js",
        };

        public static readonly string[] AppJs = new string[] {
            "~/Scripts/App/App.js",
            "~/Scripts/App/Startup.js",
            "~/Scripts/App/AppMediator.js",
            // shared
            "~/Scripts/App/Shared/LayoutViewModel.js",
            "~/Scripts/App/Shared/LayoutView.js",
            "~/Scripts/App/Shared/WebServiceProxy.js",
            // Signin
            "~/Scripts/App/Signin/WebServiceProxy.js",
            "~/Scripts/App/Signin/SigninViewModel.js",
            "~/Scripts/App/Signin/SigninView.js",

            // Home
            "~/Scripts/App/Home/WebServiceProxy.js",
            "~/Scripts/App/Home/HomeViewModel.js",
            "~/Scripts/App/Home/HomeView.js",
            

            "~/Scripts/App/Home/TitlebarViewModel.js",
            "~/Scripts/App/Home/TitlebarView.js",

            "~/Scripts/App/Home/SideMenuViewModel.js",
            "~/Scripts/App/Home/SideMenuView.js",

            // ContentHoge
            "~/Scripts/App/ContentsHoge/WebServiceProxy.js",
            "~/Scripts/App/ContentsHoge/Mediator.js",

            "~/Scripts/App/ContentsHoge/MainViewModel.js",
            "~/Scripts/App/ContentsHoge/MainView.js",
            "~/Scripts/App/ContentsHoge/DetailViewModel.js",
            "~/Scripts/App/ContentsHoge/DetailView.js",


        };
    }
}
