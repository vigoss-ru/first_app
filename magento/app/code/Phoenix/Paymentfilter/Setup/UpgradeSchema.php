<?php
/**
 * Created by PhpStorm.
 * User: Hong
 * Date: 06.08.2016
 * Time: 15:57
 */

namespace Phoenix\Paymentfilter\Setup;

use Magento\Framework\Setup\UpgradeSchemaInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;

/**
 * @codeCoverageIgnore
 */
class UpgradeSchema implements UpgradeSchemaInterface
{
    /**
     * {@inheritdoc}
     */
    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        $setup->startSetup();
        if (version_compare($context->getVersion(), '0.1.0', '<')) {
            $setup->getConnection()->addColumn(
                $setup->getTable('customer_group'),
                'payment_method',
                [
                    'type' => \Magento\Framework\DB\Ddl\Table::TYPE_TEXT,
                    'length' => 100,
                    'nullable' => true,
                    'default' => null,
                    'unsigned' => true,
                    'comment' => 'Payment method id'
                ]
            );
        }

        $setup->endSetup();
    }
}