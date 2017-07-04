using System;
using BE;
using DAL;
using Xunit;

namespace XUT
{
    public class RepositoryTest
    {
        [Fact]
        public void InitializeRepository()
        {
            var connectionString = StaticValues.MONGODB_URL;
            var repository = new PersonRepository(connectionString);
        }

        [Fact]
        public async void Add()
        {
			var connectionString = StaticValues.MONGODB_URL;
			var repository = new PersonRepository(connectionString);
            var person = new Person()
            {
                Id = 1,
                FirstName = "Test",
                LastName = "Person",
                EmailAddress = "test@person.com",
                DateOfBirth = new DateTime(1991, 01, 01),
                Nationality = "British"
            };

            await repository.Add(person);
		}

		[Fact]
		public async void GetAll()
		{
			var connectionString = StaticValues.MONGODB_URL;
			var repository = new PersonRepository(connectionString);

            await repository.GetAll();
		}

		[Fact]
		public async void Update()
		{
			var connectionString = StaticValues.MONGODB_URL;
			var repository = new PersonRepository(connectionString);
			var id = 1;
			var person = new Person()
			{
				Id = 1,
				FirstName = "Test",
				LastName = "Person",
				EmailAddress = "test@person.com",
				DateOfBirth = new DateTime(1991, 01, 01),
				Nationality = "French"
			};

            await repository.Update(id, person);
		}

		[Fact]
		public async void Get()
		{
			var connectionString = StaticValues.MONGODB_URL;
			var repository = new PersonRepository(connectionString);
			var id = 1;

			await repository.Get(id);
		}

        [Fact]
        public async void Delete()
        {
            var connectionString = StaticValues.MONGODB_URL;
            var repository = new PersonRepository(connectionString);
            var id = 1;

            await repository.Delete(id);
        }
    }
}
