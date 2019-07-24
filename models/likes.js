export default (sequelize, DataTypes) => {
  const likes = sequelize.define('likes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    articleSlug: {
      type: DataTypes.STRING,
      references: {
        model: 'articles',
        key: 'slug'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      allowNull: false
    },
    typeState: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  likes.associate = (models) => {
    likes.belongsTo(models.articles, { foreignKey: 'articleSlug' });
    likes.belongsTo(models.users, { foreignKey: 'userId' });
  };
  return likes;
};
