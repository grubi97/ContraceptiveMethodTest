

// This code requires the Nuget package Microsoft.AspNet.WebApi.Client to be installed.
// Instructions for doing this in Visual Studio:
// Tools -> Nuget Package Manager -> Package Manager Console
// Install-Package Microsoft.AspNet.WebApi.Client

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Domain;
using Newtonsoft.Json.Linq;

namespace CallRequestResponseService
{

    public class Clustering
    {

        public static List<Contraception> ContList;
        public static string Result { get; set; }



        public class StringTable
        {
            public string[] ColumnNames { get; set; }
            public string[,] Values { get; set; }
        }

        public class Value
        {
            public List<string> ColumnNames { get; set; }
            public List<List<string>> Values { get; set; }
        }

        public static async Task InvokeRequestResponseService()
        {
            using (var client = new HttpClient())
            {
                string[,] values = new string[ContList.Count, 10];
                int counter = 0;
                foreach (var item in ContList)
                {
                    values[counter, 0] = item.WifeAge.ToString();
                    values[counter, 1] = item.WifeEducation.ToString();
                    values[counter, 2] = item.husbandEducation.ToString();
                    values[counter, 3] = item.Children.ToString();
                    values[counter, 4] = item.WifeReligion.ToString();
                    values[counter, 5] = item.WifeWork.ToString();
                    values[counter, 6] = item.HusbandOccupation.ToString();
                    values[counter, 7] = item.LivingStandard.ToString();
                    values[counter, 8] = item.MediaExposure.ToString();
                    values[counter, 9] = item.ContraceptiveMethod.ToString();

                    counter++;
                }
                var scoreRequest = new
                {




                    Inputs = new Dictionary<string, StringTable>() {
                        {
                            "input1",
                            new StringTable()
                            {
                                ColumnNames = new string[] {"Col1", "Col2", "Col3", "Col4", "Col5", "Col6", "Col7", "Col8", "Col9", "Col10"},
                                Values = values
                            }
                        },
                    },
                    GlobalParameters = new Dictionary<string, string>() { }
                };
                const string apiKey = "TwbehpzPuxv4zSTTNEXCX5zbMUNX7bByFyY3P0sXTyCjC4830Gbhgc+PdjMQJkRQ9n2L8FbNf8sMAjUcmwubYw=="; // Replace this with the API key for the web service
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

                client.BaseAddress = new Uri("https://ussouthcentral.services.azureml.net/workspaces/ebb2eff147a146fd910770c734d12c6d/services/2a5c8a5662384968ab8f2f920aa56dbb/execute?api-version=2.0&details=true ");

                // WARNING: The 'await' statement below can result in a deadlock if you are calling this code from the UI thread of an ASP.Net application.
                // One way to address this would be to call ConfigureAwait(false) so that the execution does not attempt to resume on the original context.
                // For instance, replace code such as:
                //      result = await DoSomeTask()
                // with the following:
                //      result = await DoSomeTask().ConfigureAwait(false)


                HttpResponseMessage response = await client.PostAsJsonAsync("", scoreRequest);

                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                    result = result.Remove(result.Length - 3);
                    result = result.Substring(46, result.Length - 46);
                    result = result.Substring(result.IndexOf("Values") + 9);
                    result = result.Remove(result.Length - 2);
                    string separator = "]";
                    string[] stringList = result.Split(separator.ToCharArray(),
                                      StringSplitOptions.RemoveEmptyEntries);


                    string[] final = new string[stringList.Length];

                    for (int i = 0; i < stringList.Length; i++)
                    {

                        final[i] = stringList[i].Substring(stringList[0].IndexOf('[') + 2);

                    }







                    int count = 0;

                    foreach (Contraception item in ContList)
                    {
                        var myArray = final[count].Split(',');

                 




                        String str = " Contraceptive method used: "+ myArray[4];


                        item.Result = str;

                        count++;

                    }


                }
                else
                {
                    Console.WriteLine(string.Format("The request failed with status code: {0}", response.StatusCode));

                    // Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
                    Console.WriteLine(response.Headers.ToString());

                    string responseContent = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseContent);
                }
            }
        }

    }
}

