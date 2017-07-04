using System;
using BE;
using DAL;
using Xunit;

namespace XUT
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var connectionString = StaticValues.MONGODB_URL;
            var repository = new PersonRepository(connectionString);
        }
    }
}
