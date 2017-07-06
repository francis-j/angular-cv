using System;
using System.Threading;
using BE;
using Xunit;

namespace XUT
{
    public class ComponentTest
    {
        [Fact]
        public void Get()
        {
            var result = new PersonComponent().Get();

            Assert.NotEmpty(result);
        }

        [Fact]
        public void GetOne()
        {
            var id = 1;
            var result = new PersonComponent().GetById(id);

            Assert.NotNull(result);
        }

        [Fact]
        public void Add()
        {
            var id = 1;
            var person = new Person()
            {
                Id = id,
                FirstName = "Test",
                LastName = "Person",
                DateOfBirth = new DateTime(1991, 01, 01),
                Nationality = "British",
                EmailAddress = "test@person.com"
            };

            var component = new PersonComponent(); 
            component.Add(person);
            
            Thread.Sleep(1000); //Async so need to wait before checking

            var result = component.GetById(id);

            Assert.Equal(person, result);
        }

        [Fact]
        public void Delete()
        {
            var id = 1;
            var component = new PersonComponent();
            
            component.Delete(id);
            
            Thread.Sleep(1000); //Async so need to wait before checking

            var result = component.GetById(id);

            Assert.Null(result);
        }

        [Fact]
        public void Update()
        {
            var id = 1;
            var person = new Person()
            {
                Id = id,
                FirstName = "Test",
                LastName = "Update"
            };

            var component = new PersonComponent();
            component.Update(id, person);

            Thread.Sleep(1000); //Async so need to wait before checking

            var result = component.GetById(id);

            Assert.Equal(person, result);
        }
    }
}