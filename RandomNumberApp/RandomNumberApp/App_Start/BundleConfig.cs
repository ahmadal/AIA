using System.Web;
using System.Web.Optimization;

namespace RandomNumberApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/bundles/RandomNumberApp")
            .IncludeDirectory("~/Scripts/Controllers", "*.js")
            .Include("~/Scripts/RandomNumberApp.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
